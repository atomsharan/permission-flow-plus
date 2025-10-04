import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { ShieldCheck, Plus, FileText, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Permission = () => {
  const permissions = [
    {
      id: 1,
      type: "Leave Request",
      title: "Medical Leave - 3 days",
      status: "approved",
      date: "2024-10-28",
      currentStage: "Dean",
      description: "Medical leave for fever and cold",
      approvers: [
        { name: "Dr. Smith", role: "Mentor", status: "approved" },
        { name: "Prof. Johnson", role: "Incharge", status: "approved" },
        { name: "Dr. Brown", role: "HOD", status: "approved" },
        { name: "Dr. Wilson", role: "Dean", status: "approved" }
      ]
    },
    {
      id: 2,
      type: "Event Permission",
      title: "Tech Talk Organization",
      status: "pending",
      date: "2024-10-30",
      currentStage: "HOD",
      description: "Permission to organize a tech talk on AI/ML",
      approvers: [
        { name: "Dr. Smith", role: "Mentor", status: "approved" },
        { name: "Prof. Johnson", role: "Incharge", status: "approved" },
        { name: "Dr. Brown", role: "HOD", status: "pending" },
        { name: "Dr. Wilson", role: "Dean", status: "pending" }
      ]
    },
    {
      id: 3,
      type: "Assignment Extension",
      title: "Database Project Extension",
      status: "rejected",
      date: "2024-10-25",
      currentStage: "Mentor",
      description: "Extension request for database project submission",
      approvers: [
        { name: "Dr. Smith", role: "Mentor", status: "rejected" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pending": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "rejected": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle2 className="h-4 w-4" />;
      case "pending": return <Clock className="h-4 w-4" />;
      case "rejected": return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Permission Portal - Permission Portal+",
    description: "Submit and track permission requests for leaves, events, and academic activities.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <main className="container mx-auto flex-1 px-4 pb-24 pt-8">
        <header className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-7 w-7 text-brand-emerald" />
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Permission Portal
              </h1>
            </div>
            <Button variant="premium" size="lg" className="shadow-glow">
              <Plus className="mr-2 h-5 w-5" />
              New Request
            </Button>
          </div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Submit and track your permission requests through the institutional hierarchy.
          </p>
        </header>

        <Tabs defaultValue="my-requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="my-requests">My Requests</TabsTrigger>
            <TabsTrigger value="pending-approval">Pending Approval</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="my-requests" className="space-y-6">
            <div className="grid gap-6">
              {permissions.map((permission) => (
                <article key={permission.id} className="card-interactive p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium">{permission.title}</h3>
                        <Badge className={getStatusColor(permission.status)} variant="secondary">
                          <span className="flex items-center gap-1">
                            {getStatusIcon(permission.status)}
                            {permission.status.toUpperCase()}
                          </span>
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{permission.type}</span>
                        <span>•</span>
                        <span>{new Date(permission.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Current: {permission.currentStage}</span>
                      </div>
                      <p className="text-muted-foreground">{permission.description}</p>
                    </div>
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>

                  {/* Approval Chain */}
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium mb-3">Approval Chain</h4>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">
                      {permission.approvers.map((approver, index) => (
                        <div key={index} className="flex items-center gap-2 min-w-fit">
                          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-background">
                            <div className={`h-2 w-2 rounded-full ${
                              approver.status === 'approved' ? 'bg-green-500' :
                              approver.status === 'rejected' ? 'bg-red-500' :
                              'bg-yellow-500'
                            }`} />
                            <div className="text-sm">
                              <div className="font-medium">{approver.role}</div>
                              <div className="text-xs text-muted-foreground">{approver.name}</div>
                            </div>
                          </div>
                          {index < permission.approvers.length - 1 && (
                            <div className="h-px w-6 bg-border" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm">View Details</Button>
                    <div className="flex items-center gap-2">
                      {permission.status === 'pending' && (
                        <Button variant="outline" size="sm">Edit Request</Button>
                      )}
                      <Button variant="ghost" size="sm">Download PDF</Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending-approval" className="space-y-6">
            <div className="card-professional p-12 text-center">
              <ShieldCheck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Pending Approvals</h3>
              <p className="text-muted-foreground text-base">
                You don't have any requests waiting for your approval at the moment.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Leave Request", description: "Standard leave application template", icon: "📝" },
                { name: "Event Permission", description: "For organizing events and activities", icon: "🎉" },
                { name: "Assignment Extension", description: "Request deadline extensions", icon: "📚" },
                { name: "Project Discussion", description: "Schedule project meetings", icon: "💼" },
                { name: "Resource Booking", description: "Book facilities and equipment", icon: "🏢" },
                { name: "Study Leave", description: "Academic study leave requests", icon: "🎓" }
              ].map((template, index) => (
                <div key={index} className="card-interactive p-6 hover-lift">
                  <div className="text-3xl mb-3">{template.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Permission;