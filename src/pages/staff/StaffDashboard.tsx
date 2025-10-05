import StaffTopBar from "@/components/layout/StaffTopBar";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Users, Clock, TrendingUp, AlertCircle } from "lucide-react";

const StaffDashboard = () => {
  const pendingApprovals = [
    {
      id: 1,
      student: "John Doe",
      type: "Leave Request",
      priority: "high",
      submitted: "2 hours ago",
      reason: "Medical appointment"
    },
    {
      id: 2,
      student: "Sarah Wilson",
      type: "Event Permission",
      priority: "medium",
      submitted: "5 hours ago",
      reason: "Tech fest organization"
    },
    {
      id: 3,
      student: "Mike Chen",
      type: "Submission Extension",
      priority: "low",
      submitted: "1 day ago",
      reason: "Family emergency"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Staff Portal - Permission Portal+",
    description: "Staff dashboard for managing student permissions and approvals"
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <StaffTopBar />
      <main className="container mx-auto flex-1 px-4 pb-24 pt-8">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-hero-gradient bg-clip-text text-transparent mb-4">
            Staff Dashboard
          </h1>
          <p className="text-lg max-w-2xl text-muted-foreground">
            Manage approvals, review requests, and oversee student permissions efficiently.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Priority Approvals */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-brand-terracotta" />
                  Pending Approvals
                </h2>
                <Badge variant="destructive">{pendingApprovals.length} Pending</Badge>
              </div>
              <div className="space-y-4">
                {pendingApprovals.map((request) => (
                  <article key={request.id} className="card-interactive p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{request.student}</h3>
                          <Badge 
                            variant={request.priority === "high" ? "destructive" : "outline"}
                          >
                            {request.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{request.type}</p>
                        <p className="text-sm">{request.reason}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{request.submitted}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="premium" size="sm">Approve</Button>
                      <Button variant="outline" size="sm">Review</Button>
                      <Button variant="outline" size="sm">Reject</Button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Recent Activity */}
            <section className="card-professional p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {[
                  { action: "Approved leave request", student: "Emily Davis", time: "30 min ago" },
                  { action: "Reviewed event permission", student: "Alex Kumar", time: "1 hour ago" },
                  { action: "Rejected submission extension", student: "Tom Brown", time: "2 hours ago" }
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.student}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            {/* Quick Stats */}
            <div className="card-professional p-5">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-brand-emerald" />
                Quick Stats
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Pending Approvals</span>
                    <span className="text-2xl font-bold text-brand-terracotta">
                      {pendingApprovals.length}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Approved Today</span>
                    <span className="text-2xl font-bold text-brand-emerald">8</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Avg Response Time</span>
                    <span className="text-2xl font-bold">1.5h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-professional p-5">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <FileCheck className="h-4 w-4" />
                  Bulk Approve
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Users className="h-4 w-4" />
                  View All Students
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Clock className="h-4 w-4" />
                  History
                </Button>
              </div>
            </div>

            {/* Department Info */}
            <div className="card-professional p-5">
              <h2 className="text-lg font-semibold mb-3">Department</h2>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">Computer Science</p>
                <p className="text-muted-foreground">Total Students: 245</p>
                <p className="text-muted-foreground">Active Requests: 12</p>
              </div>
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

export default StaffDashboard;
