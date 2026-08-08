"use client";
import { useEffect, useState } from "react";
import type { CharacterConfig, Effects, GameConfig, GameState, StatKey } from "@/lib/types";
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
 return <div className="stat-editor"><div className="stat-editor-title">{title}</div><div className="stat-editor-grid">{statKeys.map(key=>{const step=key==="money"?100:10;return <div className="stat-control" key={key}><span>{statLabels[key]}</span><div><button type="button" onClick={()=>change(key,(value?.[key]??0)-step)}>−</button><input type="number" step={step} value={value?.[key]??0} onChange={e=>change(key,Number(e.target.value))}/><button type="button" onClick={()=>change(key,(value?.[key]??0)+step)}>＋</button></div></div>})}</div></div>;
}
function cleanJson(value:unknown){return JSON.stringify(value,null,2);}
function roleTemplate(index:number):CharacterConfig{
 const id=`role-${Date.now()}`;
 return {
  id,name:`新角色 ${index}`,job:"新職業",instrument:"角色",icon:"⭐",color:"#7c8cff",
  initial:{experience:0,money:300},
  titles:["探索起步","專業養成","代表作實踐","使命大師"],
  milestones:["累積 100 經驗值，進入第二階段。","累積 200 經驗值，進入第三階段。","累積 300 經驗值，進入第四階段。","累積 400 經驗值，完成職涯旅程。"],
  cards:[
   {id:`${id}-chance-1-1`,characterId:id,contentStage:1,type:"chance",title:"第一次好機會",description:"請輸入這個角色第一階段的機會事件。",effects:{experience:40},resolutionMode:"automatic"},
   {id:`${id}-destiny-1-1`,characterId:id,contentStage:1,type:"destiny",title:"第一次挑戰",description:"請輸入這個角色第一階段的命運事件。",effects:{experience:-20},resolutionMode:"automatic"},
  ],
 };
}
function normalizeRole(role:CharacterConfig):CharacterConfig{
 return {
  ...role,
  initial:{experience:Math.max(0,Number(role.initial?.experience)||0),money:Math.max(0,Number(role.initial?.money)||0)},
  titles:[...(role.titles||[])].slice(0,4),
  milestones:[...(role.milestones||[])].slice(0,4),
  cards:(role.cards||[]).map(card=>({...card,characterId:role.id})),
 };
}

export default function AdminApp(){
 const[auth,setAuth]=useState<boolean|null>(null);const[email,setEmail]=useState("");const[password,setPassword]=useState("");const[config,setConfig]=useState<GameConfig|null>(null);const[game,setGame]=useState<GameState|null>(null);
 const[tab,setTab]=useState<"roles"|"cells"|"live">("roles");const[selectedRole,setSelectedRole]=useState("");const[jsonText,setJsonText]=useState("");const[jsonError,setJsonError]=useState("");const[msg,setMsg]=useState("");const[adjusting,setAdjusting]=useState("");
 useEffect(()=>{let stopAuth:(()=>void)|undefined;let mounted=true;async function load(){try{if(!isFirebaseConfigured())throw new Error("firebase-missing");const authClient=firebaseAuth();stopAuth=onAuthStateChanged(authClient,user=>setAuth(!!user));const nextConfig=await loadRemoteConfig();if(!mounted)return;setConfig(nextConfig);const nextGame=await loadRemoteGame(nextConfig);if(!mounted)return;setGame(nextGame);const first=nextConfig.characters[0]?.id||"";setSelectedRole(first);setJsonText(first?cleanJson(nextConfig.characters[0]):"")}catch(error){const first=defaultConfig.characters[0]?.id||"";setConfig(defaultConfig);setSelectedRole(first);setJsonText(first?cleanJson(defaultConfig.characters[0]):"");setAuth(false);setMsg(error instanceof Error&&error.message==="firebase-missing"?"Firebase 尚未設定，請先建立 .env.local。":error instanceof Error?error.message:"後台載入失敗")}}load();return()=>{mounted=false;stopAuth?.()}},[]);
 useEffect(()=>{if(!config)return;const role=config.characters.find(item=>item.id===selectedRole);setJsonText(role?cleanJson(role):"");setJsonError("")},[selectedRole,config]);
 useEffect(()=>{if(!auth||!config)return;return subscribeRemoteGame(config,setGame,error=>setMsg(error.message))},[auth,config]);
 const login=async(e:React.FormEvent)=>{e.preventDefault();try{await signInWithEmailAndPassword(firebaseAuth(),email,password);setPassword("");setMsg("")}catch{setMsg("登入失敗，請確認 Firebase 帳號與密碼。")}};
 const publish=async()=>{if(!config)return;try{setMsg("發布中…");const saved=await saveRemoteConfig(config);setConfig(saved);setMsg("已發布！新設定已寫入 Firebase。")}catch(error){setMsg(error instanceof Error?`發布失敗：${error.message}`:"發布失敗，請重新登入。")}};
 const reset=async()=>{if(!config)return;if(!confirm("確定要清除目前遊戲進度？卡片、角色與格子設定不會被刪除。"))return;try{const next=await resetRemoteGame(config);setGame(next);setMsg("遊戲已重置。")}catch(error){setMsg(error instanceof Error?`重置失敗：${error.message}`:"重置失敗。")}};
 const logout=async()=>{await signOut(firebaseAuth());setAuth(false)};
 const applyRoleJson=()=>{if(!config)return;try{const role=normalizeRole(JSON.parse(jsonText) as CharacterConfig);if(!role.id)throw new Error("角色 JSON 必須包含 id");setConfig(current=>current?{...current,characters:current.characters.map(item=>item.id===selectedRole?role:item),cells:current.cells.map(cell=>cell.id===0?{...cell,startRewards:{...cell.startRewards,[role.id]:cell.startRewards?.[selectedRole]??0}}:cell)}:current);setSelectedRole(role.id);setJsonError("");setMsg("角色 JSON 已套用，記得按發布修改。")}catch(error){setJsonError(error instanceof Error?error.message:"JSON 格式錯誤")}};
 const handleJsonKeyDown=(event:React.KeyboardEvent<HTMLTextAreaElement>)=>{if(event.key!=="Tab")return;event.preventDefault();const target=event.currentTarget;const start=target.selectionStart;const end=target.selectionEnd;const next=jsonText.slice(0,start)+"  "+jsonText.slice(end);setJsonText(next);requestAnimationFrame(()=>{target.selectionStart=target.selectionEnd=start+2})};
 const addRole=()=>{if(!config)return;const role=roleTemplate(config.characters.length+1);setConfig({...config,characters:[...config.characters,role],cells:config.cells.map(cell=>cell.id===0?{...cell,startRewards:{...cell.startRewards,[role.id]:200}}:cell)});setSelectedRole(role.id);setMsg("已新增角色，請編輯 JSON 後發布。")};
 const deleteRole=()=>{if(!config||!selectedRole)return;if(config.characters.length<=1){setMsg("至少需要保留一個角色。");return}if(!confirm("確定刪除此角色與所有卡片？目前遊戲進度也會在下次讀取時同步移除。"))return;const nextCharacters=config.characters.filter(role=>role.id!==selectedRole);setConfig({...config,characters:nextCharacters,cells:config.cells.map(cell=>cell.id===0?{...cell,startRewards:Object.fromEntries(Object.entries(cell.startRewards||{}).filter(([id])=>id!==selectedRole))}:cell)});setSelectedRole(nextCharacters[0]?.id||"")};
 const updateStartReward=(characterId:string,next:number)=>setConfig(current=>current?{...current,cells:current.cells.map(cell=>cell.id===0?{...cell,startRewards:{...cell.startRewards,[characterId]:Math.max(0,next)}}:cell)}:current);
 const adjustStat=async(playerId:string,key:StatKey,delta:number)=>{if(!game||adjusting)return;const current=game.players[playerId]?.stats[key]??0;const next=Math.max(0,current+delta);setAdjusting(playerId+key);try{const nextGame=structuredClone(game);nextGame.players[playerId].stats[key]=next;const saved=await saveRemoteGame(nextGame,"admin-adjust");setGame(saved);setMsg("已即時調整角色數值。")}catch(error){setMsg(error instanceof Error?`能力調整失敗：${error.message}`:"能力調整失敗，請重新登入。")}finally{setAdjusting("")}};
 if(auth===null||!config)return <main className="loading"><div className="spinner">⚙️</div><p>正在開啟管理後台…</p></main>;
 if(!auth)return <main className="admin-login"><a href="#/" className="back-link">← 回到遊戲</a><form onSubmit={login} className="login-card card"><span className="admin-icon">🔐</span><p className="eyebrow">HOST CONTROL</p><h1>主持人管理介面</h1><p>請使用 Firebase Auth 的管理帳號登入，才能編輯遊戲內容或重置進度。</p><label>管理 Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} autoFocus/></label><label>管理密碼<input type="password" value={password} onChange={e=>setPassword(e.target.value)}/></label>{msg&&<p className="error">{msg}</p>}<button className="primary wide">登入管理後台</button></form></main>;
 const role=config.characters.find(item=>item.id===selectedRole);
 return <main className="admin-page"><header className="admin-header"><div><a href="#/" className="back-link">← 回到遊戲</a><p className="eyebrow">HOST CONTROL</p><h1>遊戲內容管理</h1></div><div><button className="ghost danger" onClick={reset}>重置本局</button><button className="primary" onClick={publish}>發布修改</button><button className="text-button" onClick={logout}>登出</button></div></header>
 {msg&&<div className="notice">{msg}</div>}<div className="admin-shell"><aside className="admin-tabs"><button className={tab==="roles"?"active":""} onClick={()=>setTab("roles")}>👥 角色</button><button className={tab==="cells"?"active":""} onClick={()=>setTab("cells")}>🗺️ 地圖格子</button><button className={tab==="live"?"active":""} onClick={()=>setTab("live")}>📊 即時數值</button><div className="publish-note"><b>角色 JSON</b><p>角色名稱、初始數值、階段文字、機會卡與命運卡都集中在同一份 JSON。套用後按發布，會寫入 Firebase Firestore。</p></div></aside>
 <section className="admin-content card">
 {tab==="roles"&&<><div className="admin-title"><div><p className="eyebrow">ROLE JSON</p><h2>角色內容</h2></div><button className="ghost" onClick={addRole}>＋ 新增角色</button></div><div className="filters role-json-toolbar"><select value={selectedRole} onChange={e=>setSelectedRole(e.target.value)}>{config.characters.map(item=><option value={item.id} key={item.id}>{item.name}・{item.job}</option>)}</select>{role&&<button className="ghost danger" onClick={deleteRole}>刪除此角色</button>}</div>{role&&<><label className="json-editor-label"><span>角色 JSON</span><textarea className="role-json-editor" value={jsonText} onChange={e=>setJsonText(e.target.value)} onKeyDown={handleJsonKeyDown} spellCheck={false}/></label>{jsonError&&<p className="error">{jsonError}</p>}<div className="modal-actions json-editor-actions"><button className="ghost" onClick={()=>setJsonText(cleanJson(role))}>還原目前角色</button><button className="primary" onClick={applyRoleJson}>套用 JSON</button></div></>}</>}
 {tab==="cells"&&<><div className="admin-title"><div><p className="eyebrow">BOARD EDITOR</p><h2>20 格人生地圖</h2></div></div><div className="editor-list">{config.cells.map(cell=><article className="editor-card" key={cell.id}><div className="number">{cell.id}</div><div className="editor-fields"><div className="inline-fields"><label>圖示<input value={cell.icon} onChange={e=>setConfig(c=>c?{...c,cells:c.cells.map(x=>x.id===cell.id?{...x,icon:e.target.value}:x)}:c)}/></label><label>格子名稱<input value={cell.label} onChange={e=>setConfig(c=>c?{...c,cells:c.cells.map(x=>x.id===cell.id?{...x,label:e.target.value}:x)}:c)}/></label></div><label>說明<textarea value={cell.description} onChange={e=>setConfig(c=>c?{...c,cells:c.cells.map(x=>x.id===cell.id?{...x,description:e.target.value}:x)}:c)}/></label>{cell.id!==0&&<StatEditor title="格子效果" value={cell.effects} onChange={effects=>setConfig(c=>c?{...c,cells:c.cells.map(x=>x.id===cell.id?{...x,effects}:x)}:c)}/>} {cell.id===0&&<section className="start-reward-editor"><div><b>通過起點獎勵</b><small>角色只要路過起點就會立即獲得，不必停留。</small></div><div className="start-reward-grid">{config.characters.map(character=>{const value=cell.startRewards?.[character.id]??0;return <label key={character.id}><span>{character.name}</span><div><button type="button" onClick={()=>updateStartReward(character.id,value-100)}>−</button><input type="number" min="0" step="100" value={value} onChange={event=>updateStartReward(character.id,Number(event.target.value))}/><button type="button" onClick={()=>updateStartReward(character.id,value+100)}>＋</button></div></label>})}</div></section>}<div className="cell-options"><label>暫停回合數<input type="number" min="0" value={cell.skip||0} onChange={e=>setConfig(c=>c?{...c,cells:c.cells.map(x=>x.id===cell.id?{...x,skip:Number(e.target.value)}:x)}:c)}/></label></div></div></article>)}</div></>}
 {tab==="live"&&<section className="live-players card"><div className="live-players-title"><span>LIVE</span><b>即時角色數值</b></div>{game&&game.turnOrder.map(playerId=>{const p=game.players[playerId];const c=characterOf(config,p?.characterId);if(!p||!c)return null;return <article className="live-player" key={playerId}><div className="live-player-head"><Portrait id={p.portraitId||c.id} name={c.name}/><div><h3>{c.name}</h3><small>階段：{c.titles[Math.min(p.stage,3)]||"尚未設定"}・目標 {c.job}</small></div></div><div className="live-stat-grid">{statKeys.map(key=>{const step=key==="money"?100:10;return <div className="live-stat" key={key}><span>{statLabels[key]}</span><div><button type="button" disabled={!!adjusting} onClick={()=>adjustStat(playerId,key,-step)}>−</button><b>{p.stats[key]}</b><button type="button" disabled={!!adjusting} onClick={()=>adjustStat(playerId,key,step)}>＋</button></div></div>})}</div></article>})}</section>}
 </section></div></main>;
}
