"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Download, Github, Linkedin, Code2 } from "lucide-react";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "More Work", href: "#more-projects" },
  { label: "Programs", href: "#programs" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/80 border-b border-slate-200/80 shadow-sm dark:bg-surface-900/80 dark:border-white/10 dark:shadow-glass"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-accent-600 flex items-center justify-center font-heading font-bold text-white text-lg shadow-glow-sm group-hover:shadow-glow-md transition-shadow duration-300">
              M
            </div>
            <span className="hidden sm:block font-heading font-semibold text-slate-900 dark:text-slate-100 text-sm">
              Manaswini
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-lg
                    ${
                      isActive
                        ? "text-accent-600 dark:text-accent-400 font-semibold"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-accent-600/10 dark:bg-accent-600/10 rounded-lg border border-accent-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Social icons — desktop */}
            <div className="hidden md:flex items-center gap-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-white/5 transition-colors rounded-lg"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-white/5 transition-colors rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>

            <a
              href={personalInfo.resume}
              download="Manaswini_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-accent-500/40 text-accent-600 dark:text-accent-400 hover:bg-accent-600/10 transition-all duration-200"
            >
              <Download size={13} />
              Resume
            </a>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-white/5 transition-colors rounded-lg"
                aria-label="Toggle theme"
                title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
              >
                {currentTheme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-white/5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden backdrop-blur-md bg-white/95 border-b border-slate-200 dark:bg-surface-900/95 dark:border-white/10 shadow-lg"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2.5 text-sm text-slate-700 hover:text-accent-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-3 mt-2 border-t border-slate-200 dark:border-white/10">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"><Github size={18} /></a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"><Linkedin size={18} /></a>
                  <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"><Code2 size={18} /></a>
                  <a href={personalInfo.resume} download="Manaswini_Resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs px-3 py-1.5 rounded-lg border border-accent-500/40 text-accent-600 dark:text-accent-400 hover:bg-accent-600/10">Resume</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
