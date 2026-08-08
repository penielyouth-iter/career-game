"use client";
import { useEffect, useState } from "react";
import type { BoardCell, CharacterConfig, Effects, GameConfig, GameState, StatKey } from "@/lib/types";
import { firebaseAuth, isFirebaseConfigured } from "@/lib/firebase-client";
import { loadRemoteConfig, loadRemoteGame, resetRemoteGame, saveRemoteConfig, saveRemoteGame, subscribeRemoteGame } from "@/lib/firebase-store";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { defaultConfig } from "@/lib/game-data";

const statKeys:StatKey[]=["experience","money"];
const statLabels:Record<StatKey,string>={experience:"經驗值",money:"金錢"};

function Portrait({id,name}:{id:string;name:string}){return <span className={'character-portrait portrait-'+id+' portrait-normal'} role="img" aria-label={name}/>;}
function characterOf(config:GameConfig,characterId?:string){return config.characters.find(character=>character.id===characterId)}
function StatEditor({title,value,onChange}:{title:string;value?:Effects;onChange:(next:Effects)=>void}){
 const change=(key:StatKey,next:number)=>onChange({...value,[key]:Number.isFinite(next)?next:0});
 return <div className="stat-editor"><div className="stat-editor-title">{title}</div><div className="stat-editor-grid">{statKeys.map(key=>{const step=10;return <div className="stat-control" key={key}><span>{statLabels[key]}</span><div><button type="button" onClick={()=>change(key,(value?.[key]??0)-step)}>−</button><input type="number" step={step} value={value?.[key]??0} onChange={e=>change(key,Number(e.target.value))}/><button type="button" onClick={()=>change(key,(value?.[key]??0)+step)}>＋</button></div></div>})}</div></div>;
}
function cleanJson(value:unknown){return JSON.stringify(value,null,2);}
function fourStageIntros(role:CharacterConfig){
 const fallback=[1,2,3,4].map(stage=>`${role.name||"角色"}進入第 ${stage} 階段，準備迎接新的職涯故事。`);
 return [...(role.stageIntros?.length?role.stageIntros:fallback),...fallback].slice(0,4);
}
function roleTemplate(index:number):CharacterConfig{
 const id=`role-${Date.now()}`;
 return {
  id,name:`新角色 ${index}`,job:"新職業",icon:"⭐",color:"#7c8cff",
  initial:{experience:0,money:100},
  titles:["探索起步","專業養成","代表作實踐","使命大師"],
  stageIntros:[
   "請輸入角色進入第一階段時的故事。",
   "請輸入角色進入第二階段時的故事。",
   "請輸入角色進入第三階段時的故事。",
   "請輸入角色進入第四階段時的故事。",
  ],
  milestones:["累積 100 經驗值，進入第二階段。","累積 250 經驗值，進入第三階段。","累積 400 經驗值，進入第四階段。","累積 600 經驗值，達成終極目標。"],
  cards:[
   {id:`${id}-chance-1-1`,characterId:id,contentStage:1,type:"chance",title:"第一次好機會",description:"請輸入這個角色第一階段的機會事件。",effects:{experience:20},resolutionMode:"automatic"},
   {id:`${id}-destiny-1-1`,characterId:id,contentStage:1,type:"destiny",title:"第一次挑戰",description:"請輸入這個角色第一階段的命運事件。",effects:{experience:-20},resolutionMode:"automatic"},
  ],
 };
}
function normalizeRole(role:CharacterConfig):CharacterConfig{
 return {
  id:role.id,
  name:role.name,
  job:role.job,
  icon:role.icon,
  color:role.color,
  initial:{experience:Math.max(0,Number(role.initial?.experience)||0),money:Math.max(0,Number(role.initial?.money)||0)},
  titles:[...(role.titles||[])].slice(0,4),
  stageIntros:fourStageIntros(role),
  milestones:[...(role.milestones||[])].slice(0,4),
 cards:(role.cards||[]).map(card=>({...card,characterId:role.id})),
 };
}
function normalizeCellsJson(value:unknown):BoardCell[]{
 if(!Array.isArray(value))throw new Error("地圖格子 JSON 必須是一個陣列");
 return value.map((cell,index)=>{
  const item=cell as Partial<BoardCell>;
  if(item.id===undefined)throw new Error(`第 ${index+1} 格缺少 id`);
  if(!item.type)throw new Error(`第 ${index+1} 格缺少 type`);
  if(!item.label)throw new Error(`第 ${index+1} 格缺少 label`);
  if(!item.icon)throw new Error(`第 ${index+1} 格缺少 icon`);
  if(!item.description)throw new Error(`第 ${index+1} 格缺少 description`);
  const next:BoardCell={
   id:Math.max(0,Math.floor(Number(item.id)||0)),
   type:String(item.type),
   label:String(item.label),
   icon:String(item.icon),
   description:String(item.description),
  };
  if(item.effects&&typeof item.effects==="object")next.effects={experience:Number(item.effects.experience)||0,money:Number(item.effects.money)||0};
  if(item.skip)next.skip=Math.max(0,Math.floor(Number(item.skip)||0));
  if(item.move)next.move=Math.max(-6,Math.min(6,Math.floor(Number(item.move)||0)));
  if(item.choice==="charity")next.choice="charity";
  return next;
 }).sort((a,b)=>a.id-b.id);
}
function replaceRole(config:GameConfig,selectedRole:string,role:CharacterConfig):GameConfig{
 const exists=config.characters.some(item=>item.id===selectedRole);
 const characters=exists?config.characters.map(item=>item.id===selectedRole?role:item):[...config.characters,role];
 return {...config,characters};
}

export default function AdminApp(){
 const[auth,setAuth]=useState<boolean|null>(null);const[email,setEmail]=useState("");const[password,setPassword]=useState("");const[config,setConfig]=useState<GameConfig|null>(null);const[game,setGame]=useState<GameState|null>(null);
 const[tab,setTab]=useState<"roles"|"rules"|"cells"|"live">("roles");const[selectedRole,setSelectedRole]=useState("");const[jsonText,setJsonText]=useState("");const[jsonError,setJsonError]=useState("");const[mapJsonText,setMapJsonText]=useState("");const[mapJsonError,setMapJsonError]=useState("");const[msg,setMsg]=useState("");const[adjusting,setAdjusting]=useState("");
 useEffect(()=>{let stopAuth:(()=>void)|undefined;let mounted=true;async function load(){try{if(!isFirebaseConfigured())throw new Error("firebase-missing");const authClient=firebaseAuth();stopAuth=onAuthStateChanged(authClient,user=>setAuth(!!user));const nextConfig=await loadRemoteConfig();if(!mounted)return;setConfig(nextConfig);const nextGame=await loadRemoteGame(nextConfig);if(!mounted)return;setGame(nextGame);const first=nextConfig.characters[0]?.id||"";setSelectedRole(first);setJsonText(first?cleanJson(nextConfig.characters[0]):"")}catch(error){const first=defaultConfig.characters[0]?.id||"";setConfig(defaultConfig);setSelectedRole(first);setJsonText(first?cleanJson(defaultConfig.characters[0]):"");setAuth(false);setMsg(error instanceof Error&&error.message==="firebase-missing"?"Firebase 尚未設定，請先建立 .env.local。":error instanceof Error?error.message:"後台載入失敗")}}load();return()=>{mounted=false;stopAuth?.()}},[]);
 useEffect(()=>{if(!config)return;const role=config.characters.find(item=>item.id===selectedRole);setJsonText(role?cleanJson(role):"");setJsonError("")},[selectedRole,config]);
 useEffect(()=>{if(!config)return;setMapJsonText(cleanJson(config.cells));setMapJsonError("")},[config]);
 useEffect(()=>{if(!auth||!config)return;return subscribeRemoteGame(config,setGame,error=>setMsg(error.message))},[auth,config]);
 const login=async(e:React.FormEvent)=>{e.preventDefault();try{await signInWithEmailAndPassword(firebaseAuth(),email,password);setPassword("");setMsg("")}catch{setMsg("登入失敗，請確認 Firebase 帳號與密碼。")}};
 const configWithCurrentEditor=()=>{if(!config)return null;if(tab==="roles"&&selectedRole){const role=normalizeRole(JSON.parse(jsonText) as CharacterConfig);if(!role.id)throw new Error("角色 JSON 必須包含 id");setJsonError("");return replaceRole(config,selectedRole,role)}if(tab==="cells"){const cells=normalizeCellsJson(JSON.parse(mapJsonText));if(!cells.length)throw new Error("地圖格子至少需要一格");setMapJsonError("");return {...config,cells}}return config};
 const publish=async()=>{if(!config)return;try{setMsg("發布中…");const nextConfig=configWithCurrentEditor();if(!nextConfig)return;const saved=await saveRemoteConfig(nextConfig);setConfig(saved);setMsg("已發布！新設定已寫入 Firebase。")}catch(error){if(tab==="roles")setJsonError(error instanceof Error?error.message:"JSON 格式錯誤");if(tab==="cells")setMapJsonError(error instanceof Error?error.message:"JSON 格式錯誤");setMsg(error instanceof Error?`發布失敗：${error.message}`:"發布失敗，請重新登入。")}};
 const reset=async()=>{if(!config)return;if(!confirm("確定要清除目前遊戲進度？卡片、角色與格子設定不會被刪除。"))return;try{const next=await resetRemoteGame(config);setGame(next);setMsg("遊戲已重置。")}catch(error){setMsg(error instanceof Error?`重置失敗：${error.message}`:"重置失敗。")}};
 const logout=async()=>{await signOut(firebaseAuth());setAuth(false)};
 const applyRoleJson=()=>{if(!config)return;try{const role=normalizeRole(JSON.parse(jsonText) as CharacterConfig);if(!role.id)throw new Error("角色 JSON 必須包含 id");setConfig(current=>current?replaceRole(current,selectedRole,role):current);setSelectedRole(role.id);setJsonError("");setMsg("角色 JSON 已套用，記得按發布修改。")}catch(error){setJsonError(error instanceof Error?error.message:"JSON 格式錯誤")}};
 const handleJsonKeyDown=(event:React.KeyboardEvent<HTMLTextAreaElement>,value:string,setter:(next:string)=>void)=>{if(event.key!=="Tab")return;event.preventDefault();const target=event.currentTarget;const start=target.selectionStart;const end=target.selectionEnd;const next=value.slice(0,start)+"  "+value.slice(end);setter(next);requestAnimationFrame(()=>{target.selectionStart=target.selectionEnd=start+2})};
 const applyMapJson=()=>{if(!config)return;try{const cells=normalizeCellsJson(JSON.parse(mapJsonText));if(!cells.length)throw new Error("地圖格子至少需要一格");setConfig(current=>current?{...current,cells}:current);setMapJsonError("");setMsg("地圖格子 JSON 已套用，記得按發布修改。")}catch(error){setMapJsonError(error instanceof Error?error.message:"JSON 格式錯誤")}};
 const addRole=()=>{if(!config)return;const role=roleTemplate(config.characters.length+1);setConfig({...config,characters:[...config.characters,role]});setSelectedRole(role.id);setMsg("已新增角色，請編輯 JSON 後發布。")};
 const loadBuiltInRole=()=>{if(!config||!selectedRole)return;const builtIn=defaultConfig.characters.find(item=>item.id===selectedRole);if(!builtIn){setMsg("這個角色沒有程式內建版本。");return}if(!confirm(`確定要載入「${builtIn.name}」的程式內建最新版？目前編輯中的此角色 JSON 會被取代，發布後才會寫入 Firebase。`))return;const role=structuredClone(builtIn);setConfig(current=>current?{...current,characters:current.characters.map(item=>item.id===selectedRole?role:item)}:current);setJsonText(cleanJson(role));setMsg("已載入程式內建角色內容，確認 JSON 後請按發布修改。")};
 const deleteRole=()=>{if(!config||!selectedRole)return;if(config.characters.length<=1){setMsg("至少需要保留一個角色。");return}if(!confirm("確定刪除此角色與所有卡片？目前遊戲進度也會在下次讀取時同步移除。"))return;const nextCharacters=config.characters.filter(role=>role.id!==selectedRole);setConfig({...config,characters:nextCharacters});setSelectedRole(nextCharacters[0]?.id||"")};
 const updateStageThreshold=(index:number,next:number)=>setConfig(current=>{if(!current)return current;const values=[...current.rules.stageThresholds];values[index]=Math.max(1,Math.floor(Number(next)||0));for(let i=1;i<values.length;i++)values[i]=Math.max(values[i],values[i-1]+1);return {...current,rules:{...current.rules,stageThresholds:values}}});
 const adjustStat=async(playerId:string,key:StatKey,delta:number)=>{if(!game||adjusting)return;const current=game.players[playerId]?.stats[key]??0;const next=Math.max(0,current+delta);setAdjusting(playerId+key);try{const nextGame=structuredClone(game);nextGame.players[playerId].stats[key]=next;const saved=await saveRemoteGame(nextGame,"admin-adjust");setGame(saved);setMsg("已即時調整角色數值。")}catch(error){setMsg(error instanceof Error?`能力調整失敗：${error.message}`:"能力調整失敗，請重新登入。")}finally{setAdjusting("")}};
 if(auth===null||!config)return <main className="loading"><div className="spinner">⚙️</div><p>正在開啟管理後台…</p></main>;
 if(!auth)return <main className="admin-login"><a href="#/" className="back-link">← 回到遊戲</a><form onSubmit={login} className="login-card card"><span className="admin-icon">🔐</span><p className="eyebrow">HOST CONTROL</p><h1>主持人管理介面</h1><p>請使用 Firebase Auth 的管理帳號登入，才能編輯遊戲內容或重置進度。</p><label>管理 Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} autoFocus/></label><label>管理密碼<input type="password" value={password} onChange={e=>setPassword(e.target.value)}/></label>{msg&&<p className="error">{msg}</p>}<button className="primary wide">登入管理後台</button></form></main>;
 const role=config.characters.find(item=>item.id===selectedRole);
 return <main className="admin-page"><header className="admin-header"><div><a href="#/" className="back-link">← 回到遊戲</a><p className="eyebrow">HOST CONTROL</p><h1>遊戲內容管理</h1></div><div><button className="ghost danger" onClick={reset}>重置本局</button><button className="primary" onClick={publish}>發布修改</button><button className="text-button" onClick={logout}>登出</button></div></header>
 {msg&&<div className="notice">{msg}</div>}<div className="admin-shell"><aside className="admin-tabs"><button className={tab==="roles"?"active":""} onClick={()=>setTab("roles")}>👥 角色</button><button className={tab==="rules"?"active":""} onClick={()=>setTab("rules")}>⚙️ 規則</button><button className={tab==="cells"?"active":""} onClick={()=>setTab("cells")}>🗺️ 地圖格子</button><button className={tab==="live"?"active":""} onClick={()=>setTab("live")}>📊 即時數值</button><div className="publish-note"><b>JSON 編輯</b><p>角色與地圖格子都可以直接編輯 JSON。套用後按發布，會寫入 Firebase Firestore。</p></div></aside>
 <section className="admin-content card">
 {tab==="roles"&&<><div className="admin-title"><div><p className="eyebrow">ROLE JSON</p><h2>角色內容</h2></div><button className="ghost" onClick={addRole}>＋ 新增角色</button></div><div className="filters role-json-toolbar"><select value={selectedRole} onChange={e=>setSelectedRole(e.target.value)}>{config.characters.map(item=><option value={item.id} key={item.id}>{item.name}・{item.job}</option>)}</select>{role&&<button className="ghost" onClick={loadBuiltInRole}>載入內建角色</button>}{role&&<button className="ghost danger" onClick={deleteRole}>刪除此角色</button>}</div>{role&&<><label className="json-editor-label"><span>角色 JSON</span><textarea className="role-json-editor" value={jsonText} onChange={e=>setJsonText(e.target.value)} onKeyDown={event=>handleJsonKeyDown(event,jsonText,setJsonText)} spellCheck={false}/></label>{jsonError&&<p className="error">{jsonError}</p>}<div className="modal-actions json-editor-actions"><button className="ghost" onClick={()=>setJsonText(cleanJson(role))}>還原目前角色</button><button className="primary" onClick={applyRoleJson}>套用 JSON</button></div></>}</>}
 {tab==="rules"&&<><div className="admin-title"><div><p className="eyebrow">GAME RULES</p><h2>全局遊戲規則</h2></div></div><div className="editor-list"><article className="editor-card"><div className="number">XP</div><div className="editor-fields"><h3>升階與終極目標經驗值</h3><p>所有角色共用。0 經驗值是第一階段，前三個門檻進入新階段，最後一個門檻是終極目標與名次判定。</p><div className="inline-fields">{config.rules.stageThresholds.map((value,index)=><label key={index}>{index===3?"終極目標":`進入第 ${index+2} 階段`}<input type="number" min="1" step="10" value={value} onChange={event=>updateStageThreshold(index,Number(event.target.value))}/></label>)}</div></div></article><article className="editor-card"><div className="number">💰</div><div className="editor-fields"><h3>起始金幣</h3><p>所有角色共用。開新局或開始前更換職業時，都會套用這個金幣數量。</p><label>每位角色起始金幣<input type="number" min="0" step="10" value={config.rules.startingMoney} onChange={event=>setConfig(current=>current?{...current,rules:{...current.rules,startingMoney:Math.max(0,Math.floor(Number(event.target.value)||0))}}:current)}/></label></div></article><article className="editor-card"><div className="number">🎓</div><div className="editor-fields"><h3>通過起點獎勵</h3><p>所有角色共用。角色只要路過起點就會立即獲得，不必停留。</p><StatEditor title="起點獎勵" value={config.rules.startReward} onChange={effects=>setConfig(current=>current?{...current,rules:{...current.rules,startReward:{experience:Math.max(0,Number(effects.experience)||0),money:Math.max(0,Number(effects.money)||0)}}}:current)}/></div></article></div></>}
 {tab==="cells"&&<><div className="admin-title"><div><p className="eyebrow">BOARD JSON</p><h2>地圖格子</h2></div></div><p className="admin-help-text">請直接編輯地圖格子陣列。每一格可包含 id、type、label、icon、description、effects、skip、move、choice。套用 JSON 後，再按右上角發布修改。</p><label className="json-editor-label"><span>地圖格子 JSON</span><textarea className="role-json-editor map-json-editor" value={mapJsonText} onChange={e=>setMapJsonText(e.target.value)} onKeyDown={event=>handleJsonKeyDown(event,mapJsonText,setMapJsonText)} spellCheck={false}/></label>{mapJsonError&&<p className="error">{mapJsonError}</p>}<div className="modal-actions json-editor-actions"><button className="ghost" onClick={()=>setMapJsonText(cleanJson(config.cells))}>還原目前地圖</button><button className="ghost" onClick={()=>setMapJsonText(cleanJson(defaultConfig.cells))}>載入內建地圖</button><button className="primary" onClick={applyMapJson}>套用 JSON</button></div></>}
 {tab==="live"&&<section className="live-players card"><div className="live-players-title"><span>LIVE</span><b>即時角色數值</b></div>{game&&game.turnOrder.map(playerId=>{const p=game.players[playerId];const c=characterOf(config,p?.characterId);if(!p||!c)return null;return <article className="live-player" key={playerId}><div className="live-player-head"><Portrait id={p.portraitId||c.id} name={c.name}/><div><h3>{c.name}</h3><small>階段：{c.titles[Math.min(p.stage,3)]||"尚未設定"}・目標 {c.job}</small></div></div><div className="live-stat-grid">{statKeys.map(key=>{const step=key==="money"?100:10;return <div className="live-stat" key={key}><span>{statLabels[key]}</span><div><button type="button" disabled={!!adjusting} onClick={()=>adjustStat(playerId,key,-step)}>−</button><b>{p.stats[key]}</b><button type="button" disabled={!!adjusting} onClick={()=>adjustStat(playerId,key,step)}>＋</button></div></div>})}</div></article>})}</section>}
 </section></div></main>;
}
