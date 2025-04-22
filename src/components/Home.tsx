import * as m from "motion/react-m";
import { Fragment, lazy } from "react";

// Lazy load the sections
const Hero = lazy(() => import("./sections/Hero"));
const Skills = lazy(() => import("./sections/Skills"));
const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));

export default function Home() {
  return (
    <Fragment>
      <m.div
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(56,189,248,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_0%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(168,85,247,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_100%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </m.div>

      <Hero />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
}
