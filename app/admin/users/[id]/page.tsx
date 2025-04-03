import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch user data based on the ID
  const user = {
    id: params.id,
    name: "test",
    email: "test@example.com",
    avatar: "/placeholder.svg?height=128&width=128",
    initials: "T",
    role: "Admin",
    status: "Active",
    lastActive: "Just now",
    joinDate: "Jan 15, 2023",
    bio: "This is a test user account for the Alpaca1rl admin dashboard.",
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-zinc-400">{user.email}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Edit Profile</Button>
          <Button variant="destructive">Delete User</Button>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-zinc-900">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>User Information</CardTitle>
              <CardDescription className="text-zinc-400">Basic information about the user</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">Full Name</h3>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">Email</h3>
                  <p>{user.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">Role</h3>
                  <p>{user.role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">Status</h3>
                  <p>{user.status}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">Joined</h3>
                  <p>{user.joinDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">Last Active</h3>
                  <p>{user.lastActive}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-400">Bio</h3>
                <p>{user.bio}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity" className="mt-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription className="text-zinc-400">User's recent actions and events</CardDescription>
            </CardHeader>
            <CardContent>
              <p>No recent activity to display.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription className="text-zinc-400">Manage user's security settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Security settings will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

