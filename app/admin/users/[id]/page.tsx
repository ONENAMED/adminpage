import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Params {
  id: string
}

interface Props {
  params: Params
}

export default function UserDetailPage({ params }: Props) {
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
    
      
        
          
            {user.email}
          
          
            {user.name}
          
        
        
          
            {user.email}
          
          
            {user.role}
          
          
            {user.status}
          
          
            {user.joinDate}
          
          
            {user.lastActive}
          
        
      

      
        
          
            {user.bio}
          
        

        
          No recent activity to display.
        

        
          Security settings will be displayed here.
        
      
    
  )
}
