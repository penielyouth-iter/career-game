import { NextResponse } from "next/server";
import { getConfig, saveConfig } from "@/lib/store";
import { isAdmin } from "@/lib/admin-auth";
export async function GET(){try{return NextResponse.json(await getConfig(),{headers:{"Cache-Control":"no-store, no-cache, must-revalidate"}})}catch(error){return NextResponse.json({error:String(error)},{status:500})}}
export async function PUT(req:Request){if(!await isAdmin())return NextResponse.json({error:"未授權"},{status:401});try{return NextResponse.json(await saveConfig((await req.json()).config))}catch(error){return NextResponse.json({error:String(error)},{status:500})}}

