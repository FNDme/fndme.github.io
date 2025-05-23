import * as m from "motion/react-m";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Skill } from "@/data/skills";

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const { name, color, description, ImageComponent, imageComponentsArray } =
    skill;
  return (
    <m.div
      role="listitem"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
        duration: 0.3,
        delay: 0.05 * index,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="relative h-[220px] overflow-hidden rounded-xl group">
        {/* Main Background with Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-60 dark:opacity-[0.2] group-hover:opacity-20 dark:group-hover:opacity-[0.25] transition-all duration-500`}
        />

        {/* Background Logo Reveal Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal sweep overlay */}
          <m.div className="absolute -left-[100%] top-0 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-black/10 to-transparent transform -rotate-45 translate-y-[-50%] group-hover:translate-x-[120%] transition-transform duration-700" />

          {/* Main logo reveal */}
          <m.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 dark:group-hover:opacity-20 transition-all duration-700"
            initial={false}
          >
            <m.div
              className="w-3/4 h-3/4 translate-x-[50%] translate-y-[-50%]"
              initial={{ scale: 1.2, rotate: 10 }}
              whileHover={{
                scale: [1.2, 1.3, 1.2],
                rotate: [10, 5, 100],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {imageComponentsArray ? (
                <div className="flex items-center justify-center">
                  {imageComponentsArray.map((ImageComponent, index) => (
                    <ImageComponent
                      key={index}
                      className={`w-1/2 translate-y-[25%] h-1/2 object-contain filter contrast-200 saturate-200 ${
                        index === 0 ? "translate-x-0" : "translate-x-[-50%]"
                      }`}
                    />
                  ))}
                </div>
              ) : (
                ImageComponent && (
                  <ImageComponent className="w-full h-full object-contain filter contrast-200 saturate-200" />
                )
              )}
            </m.div>
          </m.div>

          {/* Accent circles */}
          <div className="absolute inset-0">
            <m.div
              className={`absolute w-32 h-32 rounded-full bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700`}
              style={{
                left: "60%",
                top: "60%",
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0.8 }}
              whileHover={{
                scale: [0.8, 1.2, 0.8],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
            <m.div
              className={`absolute w-24 h-24 rounded-full bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700`}
              style={{
                left: "30%",
                top: "30%",
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0.8 }}
              whileHover={{
                scale: [0.8, 1.2, 0.8],
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
            />
          </div>
        </div>

        <CardContent className="relative h-full p-6 flex flex-col justify-between z-10">
          <div>
            {/* Skill Icon */}
            <div className="mb-4 relative">
              {imageComponentsArray ? (
                <div className="flex justify-start items-center gap-4">
                  {imageComponentsArray.map((ImageComponent, index) => (
                    <m.div
                      key={`${name}-${index}`}
                      className="w-12 h-12 relative"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                        delay: 0.1 + index * 0.05,
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <ImageComponent className="w-full h-full object-contain filter drop-shadow-2xl drop-shadow-zinc-900" />
                    </m.div>
                  ))}
                </div>
              ) : (
                <m.div
                  className="w-12 h-12 relative"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    delay: 0.1 + index * 0.05,
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  {ImageComponent && (
                    <ImageComponent className="w-full h-full object-contain filter drop-shadow-lg drop-shadow-neutral-600-800" />
                  )}
                </m.div>
              )}
            </div>

            {/* Title and Description */}
            <div className="space-y-2">
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-500">
                {name}
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-500">
                {description}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <m.div
            className="relative h-1 w-full mt-4 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
          >
            <m.div
              className={`absolute inset-0 bg-gradient-to-r ${color}`}
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1, delay: 0.4 + index * 0.05 }}
            />
          </m.div>
        </CardContent>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </Card>
    </m.div>
  );
}
