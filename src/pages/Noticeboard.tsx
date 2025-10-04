import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { Bell, Pin, Calendar, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Noticeboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

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

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !selectedFilter || notice.department === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const pinnedNotices = filteredNotices.filter(notice => notice.pinned);
  const recentNotices = filteredNotices.filter(notice => !notice.pinned);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Notice Board - Permission Portal+",
    description: "View important announcements, deadlines, and updates from your academic institution.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <main className="container mx-auto flex-1 px-4 pb-24 pt-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Bell className="h-7 w-7 text-brand-teal" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Notice Board
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Stay updated with important announcements, deadlines, and institutional updates.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notices..."
                className="pl-10 h-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Pinned Notices */}
            {pinnedNotices.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Pin className="h-5 w-5 text-brand-gold" />
                  <h2 className="text-xl font-semibold">Pinned Notices</h2>
                </div>
                <div className="space-y-4">
                  {pinnedNotices.map((notice) => (
                    <article key={notice.id} className="card-interactive p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className={getPriorityColor(notice.priority)} variant="secondary">
                            {notice.priority.toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{notice.department}</Badge>
                        </div>
                        <Pin className="h-4 w-4 text-brand-gold fill-brand-gold" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{notice.title}</h3>
                      <p className="text-muted-foreground mb-4 text-base">{notice.content}</p>
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
            )}

            {/* Recent Notices */}
            {recentNotices.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold mb-4">Recent Notices</h2>
                <div className="space-y-4">
                  {recentNotices.map((notice) => (
                    <article key={notice.id} className="card-interactive p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className={getPriorityColor(notice.priority)} variant="secondary">
                            {notice.priority.toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{notice.department}</Badge>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{notice.title}</h3>
                      <p className="text-muted-foreground mb-4 text-base">{notice.content}</p>
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
            )}

            {filteredNotices.length === 0 && (
              <div className="card-professional p-12 text-center">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No notices found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="card-professional p-5">
              <h2 className="text-lg font-semibold mb-4">Quick Filters</h2>
              <div className="space-y-2">
                {["Academic Office", "Student Activities", "Library", "Computer Science"].map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedFilter === dept ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSelectedFilter(selectedFilter === dept ? null : dept)}
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </div>

            <div className="card-professional p-5">
              <h2 className="text-lg font-semibold mb-3">Notification Settings</h2>
              <p className="text-sm text-muted-foreground mb-4">
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
