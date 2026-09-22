"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { moreProjects, languageColors } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof moreProjects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      className="group flex flex-col h-full rounded-xl
        backdrop-blur-sm bg-white/80 border border-slate-200/80 shadow-sm
        dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none
        hover:border-accent-500/40 dark:hover:border-accent-500/30 hover:bg-white dark:hover:bg-white/[0.06]
        transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-glow-sm p-5"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug pr-2">
          {project.displayName}
        </h3>
        <div className="flex items-center gap-1.5 shrink-0">
          {"live" in project && project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={13} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed flex-1 mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: languageColors[project.language] ?? "#888" }}
        />
        <span className="text-slate-600 dark:text-slate-400 text-xs font-medium">{project.language}</span>
        <span className="ml-auto text-slate-400 dark:text-slate-600 text-xs">{project.updated}</span>
      </div>
    </motion.div>
  );
}

export default function MoreProjects() {
  return (
    <section id="more-projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">More Work</span>
          <h2 className="section-heading font-heading">
            Other <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mb-10">
            Explorations, experiments, and coursework — covering full-stack web apps, ML models, Java systems, and algorithms.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {moreProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/manaswini1877"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 font-medium transition-colors"
            >
              <Github size={15} />
              View all repositories on GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
