import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mayur V Udupa - AI/ML Student & Developer",
  description:
    "Final-year AI/ML student passionate about building intelligent systems and data-driven solutions. Explore my projects in machine learning, deep learning, and data science.",
  keywords: "AI, ML, Machine Learning, Deep Learning, Data Science, Python, Portfolio, Student, Developer",
  authors: [{ name: "Mayur V Udupa" }],
  openGraph: {
    title: "Mayur V Udupa - AI/ML Student & Developer",
    description: "Final-year AI/ML student passionate about building intelligent systems and data-driven solutions.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
