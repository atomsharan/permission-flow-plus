import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import ProgressTracker from "@/components/features/ProgressTracker";
import HubGrid from "@/components/features/HubGrid";

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
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Permission Portal+
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Replace paper trails with secure, weighted approvals. Student → Mentor → Incharge → HOD → Dean.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <ProgressTracker />
            <HubGrid />
          </div>
          <aside className="space-y-4">
            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <h2 className="text-base font-medium mb-2">Notifications</h2>
              <p className="text-sm text-muted-foreground">You're all caught up. New updates will appear here.</p>
            </div>
            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <h2 className="text-base font-medium mb-2">Resources</h2>
              <p className="text-sm text-muted-foreground">Guides, policies, and templates curated by your institute.</p>
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
