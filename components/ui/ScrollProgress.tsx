"use client";
import { useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-600 via-accent-400 to-violet-300 z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
