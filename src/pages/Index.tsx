import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import ProgressTracker from "@/components/features/ProgressTracker";
import HubGrid from "@/components/features/HubGrid";
import { Button } from "@/components/ui/button";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Permission Portal+",
    applicationCategory: "EducationApplication",
    description:
      "Secure, hierarchical permissions for leaves, events, and submissions in academic institutions.",
    operatingSystem: "Web",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <main className="container mx-auto flex-1 px-4 pb-24 pt-8">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-hero-gradient bg-clip-text text-transparent mb-4">
            Permission Portal+
          </h1>
          <p className="text-lg max-w-2xl text-muted-foreground">
            Replace paper trails with secure, weighted approvals. Student → Mentor → Incharge → HOD → Dean.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <ProgressTracker />
            <HubGrid />
          </div>
          <aside className="space-y-6">
            <div className="card-professional p-5">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Quick Stats
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pending Requests</span>
                  <span className="text-xl font-bold text-accent">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Approved This Month</span>
                  <span className="text-xl font-bold text-brand-emerald">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <span className="text-xl font-bold">2.5h</span>
                </div>
              </div>
            </div>
            <div className="card-professional p-5">
              <h2 className="text-lg font-semibold mb-3">Resources</h2>
              <p className="text-sm text-muted-foreground mb-4">Guides, policies, and templates curated by your institute.</p>
              <Button variant="outline" size="sm" className="w-full">
                Browse Resources
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

export default Index;
