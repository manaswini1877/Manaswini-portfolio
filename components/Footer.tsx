import { Github, Linkedin, Code2, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

const links = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Code2, href: personalInfo.leetcode, label: "LeetCode" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-slate-200 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Logo + copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent-600 flex items-center justify-center font-heading font-bold text-white text-sm">
              M
            </div>
            <span className="font-heading font-semibold text-slate-900 dark:text-slate-200 text-sm">Manaswini</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-600">
            © {new Date().getFullYear()} · All rights reserved
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-600 flex items-center gap-1">
            Built with Next.js &amp;{" "}
            <Heart size={10} className="text-rose-500 fill-rose-500" />
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={l.label}
              className="p-2.5 rounded-xl border border-slate-200 bg-white/60 dark:bg-transparent dark:border-white/10 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100 dark:text-slate-500 dark:hover:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/5 transition-all duration-200"
            >
              <l.icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
