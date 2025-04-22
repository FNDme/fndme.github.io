import * as m from "motion/react-m";
import { Card, CardContent, CardTitle } from "../ui/card";

export function About() {
  return (
    <section className="container mx-auto px-4 py-20">
      <m.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center relative text-gray-900 dark:text-white">
          <m.span
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Approach
            <m.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </m.span>
        </h2>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
          <CardContent>
            <m.p
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              I believe in creating digital experiences that are not just
              functional, but also delightful to use. My development process
              combines technical excellence with user-centered design, ensuring
              that every project delivers both performance and engagement.
            </m.p>
            <div className="grid md:grid-cols-2 gap-8">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-100/30 dark:bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30">
                  <CardContent>
                    <CardTitle className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Development Philosophy
                    </CardTitle>
                    <p className="text-gray-700 dark:text-gray-300">
                      Clean, maintainable code is the foundation of every
                      successful project.
                    </p>
                  </CardContent>
                </Card>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-100/30 dark:bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30">
                  <CardContent>
                    <CardTitle className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Design Approach
                    </CardTitle>
                    <p className="text-gray-700 dark:text-gray-300">
                      User-centered design that focuses on creating intuitive
                      and engaging experiences.
                    </p>
                  </CardContent>
                </Card>
              </m.div>
            </div>
          </CardContent>
        </Card>
      </m.div>
    </section>
  );
}
