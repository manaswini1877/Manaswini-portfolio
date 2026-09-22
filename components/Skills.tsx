"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { skillGroups, skillColorMap } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">What I Know</span>
          <h2 className="section-heading font-heading">
            Skills &amp; <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mb-12">
            A focused toolkit built through hands-on projects — languages, frameworks, and tools I use to ship production software.
          </p>
        </AnimatedSection>

        <div className="grid gap-6">
          {skillGroups.map((group, groupIdx) => (
            <SkillGroup key={group.label} group={group} delay={groupIdx * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  group,
  delay,
}: {
  group: (typeof skillGroups)[number];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const colors = skillColorMap[group.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col sm:flex-row gap-3 sm:items-start"
    >
      {/* Category label */}
      <div className="sm:w-36 shrink-0 pt-1">
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${colors.bg} ${colors.text} ${colors.border} border`}
        >
          {group.label}
        </span>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + i * 0.05 }}
            className={`skill-tag ${colors.bg} ${colors.text} ${colors.border} border`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
