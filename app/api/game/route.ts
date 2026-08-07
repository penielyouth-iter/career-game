import { NextResponse } from "next/server";
import { getGame, saveGame } from "@/lib/store";
export async function GET(){try{return NextResponse.json(await getGame(),{headers:{"Cache-Control":"no-store, no-cache, must-revalidate"}})}catch(error){return NextResponse.json({error:String(error)},{status:500})}}
export async function PUT(req:Request){try{const body=await req.json();return NextResponse.json(await saveGame(body.state,body.action))}catch(error){return NextResponse.json({error:String(error)},{status:500})}}

