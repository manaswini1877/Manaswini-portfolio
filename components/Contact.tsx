"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { personalInfo } from "@/lib/data";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/manaswini-rani-7429suni18",
    href: personalInfo.linkedin,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/manaswini1877",
    href: personalInfo.github,
    color: "text-slate-700 dark:text-slate-300",
    bg: "bg-slate-500/10 border-slate-500/20 dark:bg-white/5 dark:border-white/10",
    external: true,
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "leetcode.com/u/manaswini-18",
    href: personalInfo.leetcode,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    external: true,
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (formState === "error") {
      setFormState("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!values.name.trim()) {
      setFormState("error");
      setStatusMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim() || !emailRegex.test(values.email.trim())) {
      setFormState("error");
      setStatusMessage("Please provide a valid email address.");
      return;
    }

    if (!values.message.trim()) {
      setFormState("error");
      setStatusMessage("Please write a message before submitting.");
      return;
    }

    setFormState("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          honeypot: values.honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormState("success");
        setStatusMessage("Message sent! I'll get back to you soon.");
        setValues({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setFormState("error");
        setStatusMessage(
          data.error || "Failed to send message. Please use the direct email link below."
        );
      }
    } catch (err) {
      setFormState("error");
      setStatusMessage(
        "Network error. Please try again or reach out via direct email."
      );
    }
  };

  const inputBase =
    "w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent-500 focus:bg-white dark:focus:bg-white/10 transition-all duration-200";

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading font-heading">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mb-12">
            Open to internship opportunities, collaborations, and interesting conversations. Drop me a message!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Social Links */}
          <AnimatedSection delay={0.1} direction="right">
            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-200 mb-4">
                Contact Details
              </h3>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={"external" in s && s.external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border ${s.bg} hover:scale-[1.01] transition-all duration-200 group bg-white/80 dark:bg-white/[0.03] shadow-sm dark:shadow-none`}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-slate-100 dark:bg-white/5">
                    <s.icon size={16} className={s.color} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500 mb-0.5 font-medium">{s.label}</p>
                    <p className="text-sm text-slate-800 dark:text-slate-300 truncate group-hover:text-accent-600 dark:group-hover:text-white transition-colors">
                      {s.value}
                    </p>
                  </div>
                  {"external" in s && s.external && (
                    <ExternalLink
                      size={14}
                      className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity mr-1"
                    />
                  )}
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} direction="left">
            <GlassCard className="p-6 md:p-7">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-200 mb-5">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot spam field hidden from humans */}
                <div
                  style={{ display: "none" }}
                  aria-hidden="true"
                  className="hidden"
                >
                  <label htmlFor="website">Leave this field blank</label>
                  <input
                    type="text"
                    id="website"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.honeypot}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-slate-600 dark:text-slate-500 mb-1.5 font-medium uppercase tracking-wider"
                  >
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputBase}
                    disabled={formState === "loading"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-slate-600 dark:text-slate-500 mb-1.5 font-medium uppercase tracking-wider"
                  >
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputBase}
                    disabled={formState === "loading"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-slate-600 dark:text-slate-500 mb-1.5 font-medium uppercase tracking-wider"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about the opportunity, project, or just say hi!"
                    className={`${inputBase} resize-none`}
                    disabled={formState === "loading"}
                  />
                </div>

                {/* Inline Status Messages */}
                <AnimatePresence>
                  {formState === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2.5 text-sm text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3"
                    >
                      <CheckCircle size={17} className="shrink-0" />
                      <span>{statusMessage || "Message sent!"}</span>
                    </motion.div>
                  )}

                  {formState === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex flex-col gap-2 text-sm text-rose-700 dark:text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle size={17} className="shrink-0 text-rose-500" />
                        <span>{statusMessage || "Failed to send message."}</span>
                      </div>
                      <div className="pl-6 text-xs text-slate-600 dark:text-slate-400">
                        Direct email fallback:{" "}
                        <a
                          href={`mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(
                            values.name || "Visitor"
                          )}&body=${encodeURIComponent(values.message)}`}
                          className="text-accent-600 dark:text-accent-400 underline font-medium hover:opacity-80"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium
                    bg-accent-600 text-white hover:bg-accent-500 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm
                    transition-all duration-200 hover:shadow-glow-sm active:scale-[0.98]"
                >
                  {formState === "loading" ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
