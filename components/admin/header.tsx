"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Bell, Menu, X, PanelLeft, PanelRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "./sidebar"
import { useSidebar } from "./sidebar-context"

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { collapsed, toggleSidebar } = useSidebar()
  const router = useRouter()
  const pathname = usePathname()

  // Determine if we should show the back button
  const isDashboard = pathname === "/admin"

  // Handle back button click
  const handleBack = () => {
    router.back()
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-zinc-800 bg-zinc-950">
      {/* Back button - only show if not on dashboard */}
      {!isDashboard && (
        <button
          type="button"
          onClick={handleBack}
          className="border-r border-zinc-800 px-4 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          title="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Go back</span>
        </button>
      )}

      {/* Mobile sidebar toggle */}
      <button
        type="button"
        className={`${!isDashboard ? "border-l" : "border-r"} border-zinc-800 px-4 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden`}
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="fixed inset-0 bg-zinc-900 bg-opacity-75" onClick={() => setSidebarOpen(false)} />

          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-zinc-950">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>

            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex flex-1 justify-between px-4">
        <div className="flex flex-1 items-center">
          {/* Sidebar toggle button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="mr-4 text-zinc-400 hover:text-white hidden md:flex"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelRight className="h-5 w-5" /> : <PanelLeft className="h-5 w-5" />}
          </Button>

          {/* Page title */}
          <h1 className="text-xl font-semibold">{getPageTitle(pathname)}</h1>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  )
}

// Helper function to get the page title based on the current path
function getPageTitle(pathname: string): string {
  if (pathname === "/admin") {
    return "Alpaca1rl Admin Dashboard"
  }

  if (pathname.startsWith("/admin/users")) {
    return "User Management"
  }

  if (pathname.startsWith("/admin/content")) {
    return "Content Management"
  }

  if (pathname.startsWith("/admin/analytics")) {
    return "Analytics"
  }

  if (pathname.startsWith("/admin/settings")) {
    return "Settings"
  }

  return "Alpaca1rl Admin"
}

