"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Calendar, GitPullRequest, Globe } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { hackathons } from "@/lib/data";

export default function Hackathons() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <section id="programs" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">Beyond the Code</span>
          <h2 className="section-heading font-heading">
            Open Source, Programs &amp; <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mb-12">
            Open source contributions, global developer programs, hackathons, and team leadership.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-2xl">
          {/* Animated vertical line */}
          <div ref={lineRef} className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10">
            <motion.div
              className="w-full bg-gradient-to-b from-accent-600 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ height: "100%" }}
            />
          </div>

          <div className="space-y-8 pl-14">
            {hackathons.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="left">
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[3.1rem] top-1 w-10 h-10 rounded-xl border flex items-center justify-center
                      ${
                        item.type === "program"
                          ? "bg-amber-500/15 border-amber-500/30 text-amber-600 dark:text-amber-400"
                          : item.type === "opensource"
                          ? "bg-cyan-500/15 border-cyan-500/30 text-cyan-600 dark:text-cyan-400"
                          : item.type === "hackathon"
                          ? "bg-accent-600/15 border-accent-500/30 text-accent-600 dark:text-accent-400"
                          : "bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                      }`}
                  >
                    {item.type === "program" ? (
                      <Globe size={16} />
                    ) : item.type === "opensource" ? (
                      <GitPullRequest size={16} />
                    ) : item.type === "hackathon" ? (
                      <Trophy size={16} />
                    ) : (
                      <Users size={16} />
                    )}
                  </div>

                  {/* Card */}
                  <div className="rounded-xl backdrop-blur-sm bg-white/80 border border-slate-200/80 shadow-sm dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300 p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-100 text-base leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs shrink-0 font-medium">
                        <Calendar size={11} />
                        {item.year}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-md border
                          ${
                            item.type === "program"
                              ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
                              : item.type === "opensource"
                              ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20"
                              : item.type === "hackathon"
                              ? "bg-accent-600/10 text-accent-700 dark:text-accent-400 border-accent-500/20"
                              : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                          }`}
                      >
                        {item.type === "program"
                          ? "Program"
                          : item.type === "opensource"
                          ? "Open Source"
                          : item.type === "hackathon"
                          ? "Hackathon"
                          : "Leadership"}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 text-xs font-medium">
                        {item.role}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
