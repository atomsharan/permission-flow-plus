import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { User, Settings, Bell, Shield, HelpCircle, LogOut, Edit, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const Account = () => {
  const user = {
    name: "John Anderson",
    email: "john.anderson@university.edu",
    studentId: "CS2021001",
    department: "Computer Science",
    year: "3rd Year",
    mentor: "Dr. Sarah Johnson",
    avatar: ""
  };

  const stats = [
    { label: "Total Requests", value: "12", description: "This semester" },
    { label: "Approved", value: "9", description: "75% success rate" },
    { label: "Pending", value: "2", description: "In review" },
    { label: "Active Courses", value: "6", description: "Current enrollment" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Account Settings - Permission Portal+",
    description: "Manage your account settings, preferences, and profile information.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <main className="container mx-auto flex-1 px-4 pb-24 pt-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <User className="h-6 w-6 text-brand-teal" />
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Account Settings
            </h1>
          </div>
          <p className="text-muted-foreground">
            Manage your profile, preferences, and account security.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Section */}
            <section className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-medium mb-6">Profile Information</h2>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-lg">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{user.name}</h3>
                  <p className="text-muted-foreground">{user.email}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{user.studentId}</span>
                    <span>•</span>
                    <span>{user.department}</span>
                    <span>•</span>
                    <span>{user.year}</span>
                  </div>
                </div>
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-muted/50">
                <div>
                  <p className="text-sm text-muted-foreground">Academic Mentor</p>
                  <p className="font-medium">{user.mentor}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Enrollment Status</p>
                  <p className="font-medium text-green-600">Active</p>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-medium mb-6">Notification Preferences</h2>
              
              <div className="space-y-4">
                {[
                  { title: "Permission Updates", description: "Get notified when your requests are reviewed", enabled: true },
                  { title: "New Notices", description: "Receive alerts for important announcements", enabled: true },
                  { title: "Course Updates", description: "Notifications about course materials and assignments", enabled: false },
                  { title: "System Messages", description: "Important system notifications and maintenance alerts", enabled: true },
                  { title: "Email Notifications", description: "Receive notifications via email", enabled: false }
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <h3 className="font-medium">{setting.title}</h3>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                    <Switch defaultChecked={setting.enabled} />
                  </div>
                ))}
              </div>
            </section>

            {/* Security */}
            <section className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-medium mb-6">Security & Privacy</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <h3 className="font-medium">Password</h3>
                    <p className="text-sm text-muted-foreground">Last changed 2 months ago</p>
                  </div>
                  <Button variant="outline" size="sm">Change</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <h3 className="font-medium">Privacy Settings</h3>
                    <p className="text-sm text-muted-foreground">Control who can see your information</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            {/* Quick Stats */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="text-base font-medium mb-4">Quick Stats</h2>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="text-lg font-semibold">{stat.value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                    {index < stats.length - 1 && <Separator className="mt-3" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="text-base font-medium mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Preferences
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  Security
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help & Support
                </Button>
                <Separator />
                <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </div>

            {/* Support */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="text-base font-medium mb-3">Need Help?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our support team for assistance with your account or the platform.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>
          </aside>
        </div>
      </main>

      <BottomNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Account;