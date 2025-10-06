import { useState } from "react";
import { Bell, Menu, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

const TopBar = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Permission Approved",
      description: "Your leave request was approved by Dr. Smith",
      time: "5 minutes ago",
      unread: true
    },
    {
      id: 2,
      title: "New Notice",
      description: "Exam schedule has been updated",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 3,
      title: "Reminder",
      description: "Submit your assignment by tomorrow",
      time: "2 hours ago",
      unread: false
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleNotificationClick = (id: number) => {
    // Backend-ready: Mark as read via API
    // await fetch(`/api/notifications/${id}/read`, { method: 'POST' });
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, unread: false } : n)
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Appearance</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="font-semibold text-lg">
            Permission Portal+
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge 
                    className="absolute -right-1 -top-1 h-5 w-5 flex items-center justify-center p-0 bg-brand-gold text-white text-xs"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>
                  You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-120px)] mt-6">
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <button
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-colors ${
                        notification.unread 
                          ? 'bg-accent/50 hover:bg-accent' 
                          : 'hover:bg-accent/30'
                      }`}
                    >
                      <h4 className="font-medium text-sm mb-1">{notification.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {notification.description}
                      </p>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <Button variant="secondary" size="icon" aria-label="Account">
            <UserRound />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
