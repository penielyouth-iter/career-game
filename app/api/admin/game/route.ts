import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getGame, saveGame } from "@/lib/store";
import type { StatKey } from "@/lib/types";

export async function PATCH(req:Request){
 if(!await isAdmin())return NextResponse.json({error:"未授權"},{status:401});
 const body=await req.json();
 const {state}=await getGame();
 const playerId=body.playerId||body.characterId;
 const player=state.players[playerId];
 if(!player)return NextResponse.json({error:"玩家不存在"},{status:404});
 for(const [key,value] of Object.entries(body.stats||{}) as [StatKey,number][]){
  if(key==="experience"||key==="money")player.stats[key]=Math.max(0,Number(value)||0);
 }
 return NextResponse.json(await saveGame(state,"admin-adjust"));
}
