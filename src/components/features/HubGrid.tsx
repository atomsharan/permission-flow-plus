import type { ComponentType } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, FileText } from "lucide-react";

const Item = ({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: ComponentType<any>;
}) => (
  <a href="#" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl">
    <Card className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-lg border p-2 bg-secondary">
            <Icon className="h-5 w-5 text-brand-teal" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">Open →</div>
      </CardContent>
    </Card>
  </a>
);

const HubGrid = () => {
  return (
    <section aria-labelledby="hub" className="w-full">
      <h2 id="hub" className="sr-only">Central hub</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Item title="Community clubs" desc="Manage events, approvals, and members" icon={Users} />
        <Item title="Assignments" desc="Plan, submit, and track deadlines" icon={FileText} />
        <Item title="Secure messaging" desc="Private chats for verified users" icon={MessageSquare} />
      </div>
    </section>
  );
};

export default HubGrid;
