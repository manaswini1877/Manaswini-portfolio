"use client";
import { GraduationCap, MapPin, Calendar, Star, Sparkles, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { aboutText, education, coursework } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">Who I Am</span>
          <h2 className="section-heading font-heading">
            About <span className="gradient-text">Me</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — Bio & Coursework */}
          <div className="space-y-5">
            {aboutText.map((para, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                  {para}
                </p>
              </AnimatedSection>
            ))}

            {/* Relevant Coursework */}
            <AnimatedSection delay={0.3}>
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={18} className="text-accent-600 dark:text-accent-400 shrink-0" />
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                    Relevant Coursework
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Alta AI Fellowship highlight */}
            <AnimatedSection delay={0.4}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-accent-600/10 border border-accent-500/20 shadow-sm">
                <Sparkles size={20} className="text-accent-600 dark:text-accent-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-accent-700 dark:text-accent-300 mb-1">
                    Alta AI Fellowship
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Selected to build AI-powered applications, working alongside industry mentors on production-grade AI products.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Education card */}
          <AnimatedSection delay={0.2} direction="left">
            <GlassCard className="p-6 gradient-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-600/15 dark:bg-accent-600/20 border border-accent-500/30 flex items-center justify-center">
                  <GraduationCap size={20} className="text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Education</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Currently enrolled</p>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-100 text-lg leading-snug mb-4">
                {education.degree}
              </h3>

              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin size={14} className="text-accent-600 dark:text-accent-400 mt-0.5 shrink-0" />
                  <span>
                    {education.institution}, {education.location}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <Calendar size={14} className="text-accent-600 dark:text-accent-400 shrink-0" />
                  <span>{education.year}</span>
                </div>
              </div>

              {/* CGPA highlight */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-accent-600/10 border border-accent-500/20">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-amber-500 dark:text-amber-400" />
                  <span className="text-sm text-slate-800 dark:text-slate-300 font-medium">CGPA</span>
                </div>
                <span className="font-heading font-bold text-2xl text-accent-600 dark:text-accent-400">
                  {education.cgpa}
                </span>
              </div>

              {/* Skills quick tags */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                <p className="text-xs text-slate-500 mb-2.5 uppercase tracking-wider font-medium">Strong in</p>
                <div className="flex flex-wrap gap-2">
                  {["Java (Primary)", "DSA (250+ LeetCode)", "Full-Stack Dev", "React & Node.js", "AI & RAG"].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
