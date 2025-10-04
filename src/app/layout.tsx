import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kaisen Leaderboard",
  description: "Veja o ranking atualizado em tempo real do kaizenmc.gg",
  creator: "lleo0h"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased background overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
