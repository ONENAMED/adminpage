import { UsersTable } from "@/components/admin/users-table"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <p className="text-zinc-400">Manage user accounts and permissions</p>
        </div>
        <Button className="bg-white text-black hover:bg-zinc-200">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <UsersTable />
    </div>
  )
}

