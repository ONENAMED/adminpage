import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { SidebarProvider } from "@/components/admin/sidebar-context"
import { DashboardContent } from "@/components/admin/dashboard-content"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Admin Dashboard | Alpaca1rl",
  description: "Admin dashboard for alpaca1rl.xyz",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <SidebarProvider>
          <DashboardContent>{children}</DashboardContent>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  )
}

