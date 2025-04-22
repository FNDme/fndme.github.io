import * as m from "motion/react-m";
import { skills } from "@/data/skills";
import { SkillCard } from "../cards/SkillCard";

export function Skills() {
  return (
    <section className="container mx-auto px-4 py-20">
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center relative text-gray-900 dark:text-white">
          <m.span
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technical Expertise
            <m.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </m.span>
        </h2>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          role="list"
          aria-labelledby="skills-heading"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </m.div>
    </section>
  );
}
