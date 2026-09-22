import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl",
        "backdrop-blur-md bg-white/80 dark:bg-white/[0.04]",
        "border border-slate-200/80 dark:border-white/10",
        "shadow-sm dark:shadow-glass",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/[0.07] hover:border-accent-500/40 dark:hover:border-accent-500/30",
        glow && "hover:shadow-glow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
