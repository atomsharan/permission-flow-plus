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
      <div className="rounded-xl border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h2 id="permission-progress" className="text-base font-medium">
            Permission progress
          </h2>
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
        <ol className="flex items-center gap-3">
          {steps.map((step, i) => (
            <li key={step.name} className="flex items-center">
              <div className="flex items-center gap-2">
                {step.status === "complete" ? (
                  <CheckCircle2 className={`h-5 w-5 ${dotCls(step.status)}`} />
                ) : step.status === "current" ? (
                  <Clock className={`h-5 w-5 ${dotCls(step.status)}`} />
                ) : (
                  <div className={`h-2.5 w-2.5 rounded-full bg-muted`} />
                )}
                <span className="text-sm">{step.name}</span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />)
              }
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProgressTracker;
