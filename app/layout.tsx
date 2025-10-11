import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Kamogelo Mosia - Full-Stack Developer",
  description: "Portfolio of Kamogelo Mosia - IT Professional & Full-Stack Developer",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-sans bg-black text-white`}>{children}</body>
    </html>
  )
}
