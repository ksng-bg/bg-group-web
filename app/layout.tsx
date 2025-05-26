import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brilly Group | Tech that Works",
  description:
    "At Brilly Group Limited, we partner with you to tackle your toughest business challenges through honest, transparent and outcome-driven solutions.",
  keywords:
    "business automation, AI implementation, employee enablement, business transformation, technology consulting",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
