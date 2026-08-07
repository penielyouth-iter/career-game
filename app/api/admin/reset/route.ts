import { NextResponse } from "next/server";import { isAdmin } from "@/lib/admin-auth";import { resetGame } from "@/lib/store";
export async function POST(){if(!await isAdmin())return NextResponse.json({error:"未授權"},{status:401});return NextResponse.json(await resetGame())}

