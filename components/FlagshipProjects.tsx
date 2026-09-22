"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechBadge from "@/components/ui/TechBadge";
import { flagshipProjects } from "@/lib/data";

function ProjectCard({ project, index }: { project: (typeof flagshipProjects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / (rect.width / 2)) * 5;
    const dy = ((e.clientY - cy) / (rect.height / 2)) * 5;
    setTilt({ x: -dy, y: dx });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <motion.div
        ref={cardRef}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`relative rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-gradient-to-br ${project.gradient}
          backdrop-blur-md bg-white/80 dark:bg-surface-800/60 shadow-sm dark:shadow-glass
          group-hover:border-accent-500/40 dark:group-hover:border-white/20 group-hover:shadow-glow-sm
          transition-all duration-300`}
      >
        {/* Top gradient bar */}
        <div
          className="h-1 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(to right, ${project.accent}, #a78bfa)` }}
        />

        <div className="p-6 md:p-8">
          {/* Number + Year */}
          <div className="flex items-start justify-between mb-5">
            <span className="font-heading font-bold text-5xl text-slate-300/60 dark:text-white/10 leading-none select-none">
              {project.number}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 dark:text-slate-100 mb-1">
            {project.name}
          </h3>
          <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-4">{project.subtitle}</p>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">
            {project.longDesc}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <TechBadge key={tech} label={tech} variant="violet" />
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium
                bg-accent-600 text-white hover:bg-accent-500 shadow-sm transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium
                border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FlagshipProjects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">Featured Work</span>
          <h2 className="section-heading font-heading">
            Flagship <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mb-12">
            Three production-grade full-stack web applications, live on the internet, with real users and real databases.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
