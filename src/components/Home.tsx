import { motion } from "framer-motion";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(56,189,248,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_0%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(168,85,247,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_100%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </motion.div>

      <Hero />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
