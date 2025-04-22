import { domAnimation } from "motion/react";
import { LazyMotion } from "motion/react";
import Home from "./components/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden">
          <ThemeToggle />
          <Home />
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;
