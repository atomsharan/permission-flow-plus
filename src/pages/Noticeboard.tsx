import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { Bell, Pin, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Noticeboard = () => {
  const notices = [
    {
      id: 1,
      title: "Mid-semester Examination Schedule",
      content: "Mid-semester examinations will commence from November 15th. Please check your individual timetables.",
      date: "2024-11-01",
      priority: "high",
      pinned: true,
      department: "Academic Office",
      views: 142
    },
    {
      id: 2,
      title: "Annual Tech Fest Registration Open",
      content: "Register for TechFest 2024 by November 10th. Event details and registration form available.",
      date: "2024-10-28",
      priority: "medium",
      pinned: true,
      department: "Student Activities",
      views: 89
    },
    {
      id: 3,
      title: "Library Extended Hours",
      content: "Library will remain open until 10 PM during exam weeks. Additional study spaces available.",
      date: "2024-10-25",
      priority: "low",
      pinned: false,
      department: "Library",
      views: 67
    },
    {
      id: 4,
      title: "Guest Lecture on AI & Machine Learning",
      content: "Join us for an insightful session with industry expert Dr. Sarah Chen on November 20th at 2 PM.",
      date: "2024-10-22",
      priority: "medium",
      pinned: false,
      department: "Computer Science",
      views: 234
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Digital Noticeboard - Permission Portal+",
    description: "View important announcements, deadlines, and updates from your academic institution.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <main className="container mx-auto flex-1 px-4 pb-24 pt-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="h-6 w-6 text-brand-teal" />
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Digital Noticeboard
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Stay updated with important announcements, deadlines, and institutional updates.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-6">
            {/* Pinned Notices */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Pin className="h-5 w-5 text-brand-gold" />
                <h2 className="text-xl font-medium">Pinned Notices</h2>
              </div>
              <div className="space-y-4">
                {notices.filter(notice => notice.pinned).map((notice) => (
                  <article key={notice.id} className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-elegant transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge className={getPriorityColor(notice.priority)} variant="secondary">
                          {notice.priority.toUpperCase()}
                        </Badge>
                        <Badge variant="outline">{notice.department}</Badge>
                      </div>
                      <Pin className="h-4 w-4 text-brand-gold fill-brand-gold" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{notice.title}</h3>
                    <p className="text-muted-foreground mb-4">{notice.content}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(notice.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {notice.views} views
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Read More</Button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Recent Notices */}
            <section>
              <h2 className="text-xl font-medium mb-4">Recent Notices</h2>
              <div className="space-y-4">
                {notices.filter(notice => !notice.pinned).map((notice) => (
                  <article key={notice.id} className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-elegant transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge className={getPriorityColor(notice.priority)} variant="secondary">
                          {notice.priority.toUpperCase()}
                        </Badge>
                        <Badge variant="outline">{notice.department}</Badge>
                      </div>
                    </div>
                    <h3 className="text-lg font-medium mb-2">{notice.title}</h3>
                    <p className="text-muted-foreground mb-4">{notice.content}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(notice.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {notice.views} views
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Read More</Button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <h2 className="text-base font-medium mb-3">Quick Filters</h2>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Academic Office
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Student Activities
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Library
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Department Notices
                </Button>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <h2 className="text-base font-medium mb-3">Notification Settings</h2>
              <p className="text-sm text-muted-foreground mb-3">
                Customize how you receive notice updates
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Manage Notifications
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

export default Noticeboard;