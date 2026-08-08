import { env } from "cloudflare:workers";
import { cookies } from "next/headers";
const COOKIE="career_admin";
async function signature(){
 const password=env.ADMIN_PASSWORD||"penielyouth";const secret=env.ADMIN_SESSION_SECRET||"local-career-game-secret";
 const bytes=new TextEncoder().encode(password+":"+secret);const hash=await crypto.subtle.digest("SHA-256",bytes);
 return Array.from(new Uint8Array(hash)).map(v=>v.toString(16).padStart(2,"0")).join("");
}
export async function isAdmin(){const jar=await cookies();return jar.get(COOKIE)?.value===await signature()}
export async function login(password:string){if(password!==(env.ADMIN_PASSWORD||"penielyouth"))return false;const jar=await cookies();jar.set(COOKIE,await signature(),{httpOnly:true,sameSite:"strict",secure:process.env.NODE_ENV==="production",path:"/",maxAge:60*60*8});return true}
export async function logout(){const jar=await cookies();jar.delete(COOKIE)}

