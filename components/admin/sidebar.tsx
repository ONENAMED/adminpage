"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FileText, BarChart3, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "./sidebar-context"

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Content", href: "/admin/content", icon: FileText },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { collapsed, toggleSidebar } = useSidebar()

  // Helper function to check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/admin" && pathname === "/admin") {
      return true
    }
    if (href !== "/admin" && pathname.startsWith(href)) {
      return true
    }
    return false
  }

  return (
    <div
      className={`${collapsed ? "md:w-16" : "md:w-64"} transition-all duration-300 hidden md:flex md:flex-col md:fixed md:inset-y-0`}
    >
      <div className="flex flex-col flex-1 min-h-0 bg-zinc-950 border-r border-zinc-800">
        <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-zinc-800 justify-between">
          {!collapsed && (
            <Link href="/admin" className="flex items-center">
              <span className="text-xl font-bold tracking-tight">Alpaca1rl</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={`${collapsed ? "mx-auto" : "ml-auto"} text-zinc-400 hover:text-white`}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    active ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  } ${collapsed ? "justify-center" : ""}`}
                  title={collapsed ? item.name : ""}
                >
                  <item.icon
                    className={`h-5 w-5 ${active ? "text-white" : "text-zinc-400"} ${collapsed ? "" : "mr-3"}`}
                    aria-hidden="true"
                  />
                  {!collapsed && item.name}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-zinc-800 p-4">
          <div className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div className={`${collapsed ? "ml-0 text-center w-full" : "ml-3"}`}>
                {!collapsed && <p className="text-sm font-medium text-white">test</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

