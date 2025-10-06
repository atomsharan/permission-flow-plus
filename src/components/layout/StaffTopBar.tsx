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

const StaffTopBar = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Permission Request",
      description: "John Doe requested leave approval",
      time: "2 minutes ago",
      unread: true,
      priority: "high"
    },
    {
      id: 2,
      title: "Approval Required",
      description: "Event approval pending from 3 students",
      time: "15 minutes ago",
      unread: true,
      priority: "high"
    },
    {
      id: 3,
      title: "Request Approved",
      description: "Your approval was processed successfully",
      time: "1 hour ago",
      unread: false,
      priority: "normal"
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleNotificationClick = (id: number) => {
    // Backend-ready: Mark as read via API
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
            Permission Portal+ <span className="text-brand-royal text-sm">Staff</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge 
                    className="absolute -right-1 -top-1 h-5 w-5 flex items-center justify-center p-0 bg-brand-terracotta text-white text-xs"
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
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        {notification.priority === "high" && (
                          <Badge variant="destructive" className="text-xs">High</Badge>
                        )}
                      </div>
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

export default StaffTopBar;
