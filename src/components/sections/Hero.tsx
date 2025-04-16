import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { features } from "@/data/features";
import { FeatureCard } from "../cards/FeatureCard";
import { Toast } from "../ui/toast";
import { useState } from "react";

export function Hero() {
  const [showToast, setShowToast] = useState(false);

  const handleConnectClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("gabiluisfreitas@gmail.com");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section className="container mx-auto px-4 py-20 min-h-screen flex items-center relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-left relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Frontend Developer
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500">
                Gabriel Luis
              </span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transforming Ideas into Digital Experiences
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I craft elegant solutions to complex problems, focusing on
              creating intuitive and engaging user experiences. With a passion
              for clean code and modern design, I bring ideas to life through
              innovative web applications.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                onClick={handleConnectClick}
                className="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/20 text-lg font-medium hover:scale-105 active:scale-95 text-white"
              >
                Let's Connect
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="https://github.com/FNDme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-700/50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/gabriel-luis-freitas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-700/50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:gabiluisfreitas@gmail.com"
                onClick={handleEmailClick}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-700/50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden md:block relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-200/40 to-purple-200/40 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <FeatureCard key={feature.title} {...feature} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        style={{
          opacity: scrollY > 10 ? 0 : 1,
          display: scrollY > 10 ? "none" : "flex",
          transition: "opacity 0.3s ease-out",
        }}
      >
        <motion.span
          className="text-gray-600 dark:text-gray-400 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Scroll to explore
        </motion.span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </motion.div>
      </motion.div>
      <Toast message="Email copied to clipboard!" isVisible={showToast} />
    </section>
  );
}
