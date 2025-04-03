"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()

  // Don't show breadcrumbs on the dashboard
  if (pathname === "/admin") {
    return null
  }

  // Split the pathname into segments
  const segments = pathname.split("/").filter(Boolean)

  // Create breadcrumb items
  const breadcrumbItems = segments.map((segment, index) => {
    // Create the path for this breadcrumb item
    const path = `/${segments.slice(0, index + 1).join("/")}`

    // Format the segment for display
    const displayName = segment.charAt(0).toUpperCase() + segment.slice(1)

    // Determine if this is the last item (current page)
    const isLast = index === segments.length - 1

    return {
      name: displayName,
      path,
      isLast,
    }
  })

  return (
    <nav className="flex text-sm text-zinc-400 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/admin" className="hover:text-white">
            Dashboard
          </Link>
        </li>

        {breadcrumbItems.slice(1).map((item, index) => (
          <li key={item.path} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1 flex-shrink-0" />
            {item.isLast ? (
              <span className="text-white">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-white">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

