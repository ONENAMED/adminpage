import { ContentTable } from "@/components/admin/content-table"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Content</h1>
        <Button className="bg-white text-black hover:bg-zinc-200">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Content
        </Button>
      </div>

      <ContentTable />
    </div>
  )
}

