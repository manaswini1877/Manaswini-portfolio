import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  variant?: "default" | "violet" | "blue" | "emerald" | "amber" | "rose" | "cyan";
  size?: "sm" | "md";
}

const variants = {
  default: "bg-white/10 text-slate-300 border-white/20",
  violet: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  blue: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  amber: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  rose: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
};

export default function TechBadge({ label, variant = "default", size = "sm" }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border font-medium",
        "transition-all duration-200 hover:-translate-y-0.5",
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm",
        variants[variant]
      )}
    >
      {label}
    </span>
  );
}
