declare module "cloudflare:workers" { export const env: { DB: D1Database; ADMIN_PASSWORD?: string; ADMIN_SESSION_SECRET?: string }; }
interface Fetcher { fetch(input: Request): Promise<Response> }
interface D1PreparedStatement { bind(...values: unknown[]): D1PreparedStatement; run(): Promise<unknown>; first<T=unknown>(): Promise<T|null> }
interface D1Database { prepare(query:string): D1PreparedStatement }

