import { CheckCircle2, Clock, ChevronRight } from "lucide-react";

type Step = {
  name: string;
  status: "complete" | "current" | "upcoming";
};

const steps: Step[] = [
  { name: "Student", status: "complete" },
  { name: "Mentor", status: "complete" },
  { name: "Incharge", status: "current" },
  { name: "HOD", status: "upcoming" },
  { name: "Dean", status: "upcoming" },
];

const dotCls = (s: Step["status"]) =>
  s === "complete"
    ? "text-brand-teal"
    : s === "current"
    ? "text-accent"
    : "text-muted-foreground";

const ProgressTracker = () => {
  return (
    <section aria-labelledby="permission-progress" className="w-full">
      <div className="card-professional p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 id="permission-progress" className="text-lg font-semibold">
            Permission Progress
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="text-xs font-medium text-brand-teal">Live Tracking</span>
          </div>
        </div>
        <ol className="flex items-center gap-2 overflow-x-auto pb-2">
          {steps.map((step, i) => (
            <li key={step.name} className="flex items-center min-w-fit">
              <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 transition-all ${
                step.status === "complete" 
                  ? "bg-brand-teal/10 border-brand-teal shadow-sm" 
                  : step.status === "current"
                  ? "bg-accent/10 border-accent shadow-glow animate-pulse"
                  : "bg-muted/50 border-border"
              }`}>
                {step.status === "complete" ? (
                  <CheckCircle2 className={`h-5 w-5 ${dotCls(step.status)}`} />
                ) : step.status === "current" ? (
                  <Clock className={`h-5 w-5 ${dotCls(step.status)} animate-pulse`} />
                ) : (
                  <div className={`h-3 w-3 rounded-full border-2 border-muted-foreground`} />
                )}
                <span className={`text-sm font-medium ${
                  step.status === "complete" ? "text-brand-teal" :
                  step.status === "current" ? "text-accent" :
                  "text-muted-foreground"
                }`}>{step.name}</span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className={`mx-1 h-5 w-5 ${
                  step.status === "complete" ? "text-brand-teal" : "text-muted-foreground"
                }`} />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProgressTracker;
