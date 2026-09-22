import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FlagshipProjects from "@/components/FlagshipProjects";
import MoreProjects from "@/components/MoreProjects";
import Certifications from "@/components/Certifications";
import Hackathons from "@/components/Hackathons";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-surface-900 dark:text-slate-100 transition-colors duration-300">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-grid opacity-100 pointer-events-none z-0" />
      {/* Gradient blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-accent-600/10 dark:bg-accent-600/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-1/3 right-1/4 w-64 h-64 bg-blue-600/8 dark:bg-blue-600/8 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <FlagshipProjects />
        <MoreProjects />
        <Certifications />
        <Hackathons />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
