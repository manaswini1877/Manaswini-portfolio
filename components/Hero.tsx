"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowDown, Download, ExternalLink } from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";
import { personalInfo, stats, typingRoles } from "@/lib/data";

// Particle canvas
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-60"
    />
  );
}

// Typing animation hook
function useTyping(roles: string[], typingSpeed = 80, deletingSpeed = 40, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const role = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIdx, roles, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

export default function Hero() {
  const typedText = useTyping(typingRoles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      <ParticleCanvas />

      {/* Gradient radial spotlight */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-600/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-600/10 text-accent-600 dark:text-accent-300 text-sm font-medium shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 animate-pulse" />
          B.Tech CSE Student — SVECW · Full-Stack Developer &amp; DSA Enthusiast
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 tracking-tight"
        >
          <span className="text-slate-900 dark:text-slate-100">Hi, I&apos;m </span>
          <span className="gradient-text">Manaswini</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-10 md:h-12 mb-6 flex items-center justify-center"
        >
          <span className="font-heading text-xl md:text-2xl text-slate-700 dark:text-slate-300">
            {typedText}
            <span className="ml-0.5 inline-block w-0.5 h-6 md:h-7 bg-accent-600 dark:bg-accent-400 align-middle animate-cursor-blink" />
          </span>
        </motion.div>

        {/* Hook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.hook}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <a href="#projects" className="btn-primary text-sm">
            <ExternalLink size={15} />
            View Projects
          </a>
          <a
            href={personalInfo.resume}
            download="Manaswini_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            <Download size={15} />
            Download Resume
          </a>
          <div className="flex items-center gap-2 ml-1">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-300 bg-white/60 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:border-white/15 dark:bg-transparent dark:text-slate-400 dark:hover:text-white dark:hover:border-white/30 dark:hover:bg-white/5 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-300 bg-white/60 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:border-white/15 dark:bg-transparent dark:text-slate-400 dark:hover:text-white dark:hover:border-white/30 dark:hover:bg-white/5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-300 bg-white/60 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:border-white/15 dark:bg-transparent dark:text-slate-400 dark:hover:text-white dark:hover:border-white/30 dark:hover:bg-white/5 transition-all duration-200"
              aria-label="LeetCode"
            >
              <Code2 size={18} />
            </a>
          </div>
        </motion.div>

        {/* Stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 rounded-2xl backdrop-blur-sm bg-white/80 border border-slate-200/80 shadow-sm dark:bg-white/[0.04] dark:border-white/10 dark:shadow-glass"
            >
              <span className="font-heading font-bold text-2xl md:text-3xl text-accent-600 dark:text-accent-400">
                <StatCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </span>
              <span className="text-slate-600 dark:text-slate-400 text-xs mt-1 text-center leading-tight">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
