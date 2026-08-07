import { NextResponse } from "next/server";import { login } from "@/lib/admin-auth";
export async function POST(req:Request){const ok=await login((await req.json()).password||"");return NextResponse.json({ok},{status:ok?200:401})}

