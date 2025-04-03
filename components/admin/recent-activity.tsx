import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: {
      name: "test",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "T",
    },
    action: "created a new post",
    time: "2 minutes ago",
  },
  {
    id: 2,
    user: {
      name: "test",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "T",
    },
    action: "updated their profile",
    time: "1 hour ago",
  },
  {
    id: 3,
    user: {
      name: "test",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "T",
    },
    action: "commented on a post",
    time: "3 hours ago",
  },
  {
    id: 4,
    user: {
      name: "test",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "T",
    },
    action: "uploaded a new image",
    time: "5 hours ago",
  },
  {
    id: 5,
    user: {
      name: "test",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "T",
    },
    action: "liked a comment",
    time: "1 day ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user.name}</span> {activity.action}
            </p>
            <p className="text-xs text-zinc-400">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

