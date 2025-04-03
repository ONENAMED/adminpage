"use client"

import type React from "react"

import { useSidebar } from "./sidebar-context"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { Breadcrumb } from "./breadcrumb"

export function DashboardContent({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar()

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      <Sidebar />
      <div
        className={`flex flex-col flex-1 overflow-hidden ${collapsed ? "md:ml-16" : "md:ml-64"} transition-all duration-300`}
      >
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <Breadcrumb />
          {children}
        </main>
      </div>
    </div>
  )
}

