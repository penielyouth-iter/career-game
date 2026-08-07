import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"守護天使的生涯大冒險",description:"陪伴四位熱音社夥伴，走過選擇、挑戰與使命的生涯探索大富翁。",icons:{icon:"/favicon.svg"},openGraph:{title:"守護天使的生涯大冒險",description:"四組守護天使，一場獨一無二的生涯旅程。",images:["/og-career-game.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body>{children}</body></html>}

