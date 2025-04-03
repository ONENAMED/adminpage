"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search } from "lucide-react"

const content = [
  {
    id: "c1",
    title: "Getting Started with Alpaca1rl",
    type: "Article",
    status: "Published",
    author: "test",
    date: "2023-11-15",
  },
  {
    id: "c2",
    title: "Advanced Techniques",
    type: "Tutorial",
    status: "Published",
    author: "test",
    date: "2023-10-28",
  },
  {
    id: "c3",
    title: "Upcoming Features",
    type: "Announcement",
    status: "Draft",
    author: "test",
    date: "2023-12-05",
  },
  {
    id: "c4",
    title: "Community Showcase",
    type: "Gallery",
    status: "Published",
    author: "test",
    date: "2023-11-02",
  },
  {
    id: "c5",
    title: "Tips and Tricks",
    type: "Article",
    status: "Review",
    author: "test",
    date: "2023-11-20",
  },
]

export function ContentTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredContent = content.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-400" />
          <Input
            type="search"
            placeholder="Search content..."
            className="pl-8 bg-zinc-900 border-zinc-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border border-zinc-800 bg-zinc-900 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800 hover:bg-zinc-800/50">
                <TableHead className="w-[300px]">Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContent.map((item) => (
                <TableRow key={item.id} className="border-zinc-800 hover:bg-zinc-800/50">
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                      {item.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        item.status === "Published"
                          ? "bg-green-500/20 text-green-500 hover:bg-green-500/20"
                          : item.status === "Draft"
                            ? "bg-zinc-500/20 text-zinc-400 hover:bg-zinc-500/20"
                            : "bg-amber-500/20 text-amber-500 hover:bg-amber-500/20"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-zinc-800" />
                        <DropdownMenuItem className="hover:bg-zinc-800">Edit</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-zinc-800">View</DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-zinc-800" />
                        <DropdownMenuItem className="text-red-500 hover:bg-zinc-800 hover:text-red-500">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

