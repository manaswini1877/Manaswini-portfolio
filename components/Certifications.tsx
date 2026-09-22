"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { certifications, achievements } from "@/lib/data";

export default function Certifications() {
  const achieveRef = useRef<HTMLDivElement>(null);
  const achieveInView = useInView(achieveRef, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">Recognition</span>
          <h2 className="section-heading font-heading">
            Certifications &amp; <span className="gradient-text">Achievements</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <AnimatedSection>
              <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-200 text-lg mb-5 flex items-center gap-2">
                <Award size={18} className="text-accent-600 dark:text-accent-400" />
                Certifications
              </h3>
            </AnimatedSection>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <AnimatedSection key={cert.name} delay={i * 0.1}>
                  <GlassCard hover className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-600/10 dark:bg-accent-600/15 border border-accent-500/20 flex items-center justify-center text-2xl shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 dark:text-slate-100 text-sm truncate">{cert.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                      Certified
                    </span>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div ref={achieveRef}>
            <AnimatedSection>
              <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-200 text-lg mb-5 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent-600 dark:text-accent-400" />
                Achievements
              </h3>
            </AnimatedSection>
            <GlassCard className="p-5">
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={achieveInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-accent-600 dark:text-accent-400 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{a}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
