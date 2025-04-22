import * as m from "motion/react-m";
import { Card, CardContent } from "../ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Toast } from "../ui/toast";
import { useState } from "react";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

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
    <section id="contact" className="container mx-auto px-4 py-20">
      <m.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl font-bold mb-8 text-center relative text-gray-900 dark:text-white">
          <m.h2
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Connect
            <m.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </m.h2>
        </span>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
          <CardContent>
            <m.p
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </m.p>
            <m.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <m.a
                href="https://github.com/FNDme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-700/50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label="Github Profile"
              >
                <Github className="w-5 h-5" />
              </m.a>
              <m.a
                href="https://www.linkedin.com/in/gabriel-luis-freitas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-700/50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label="Linkedin Profile"
              >
                <Linkedin className="w-5 h-5" />
              </m.a>
              <m.a
                href="mailto:gabiluisfreitas@gmail.com"
                onClick={handleEmailClick}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-700/50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </m.a>
            </m.div>
          </CardContent>
        </Card>
      </m.div>
      <Toast message="Email copied to clipboard!" isVisible={showToast} />
    </section>
  );
}
