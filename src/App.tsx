import { domAnimation } from "motion/react";
import { LazyMotion } from "motion/react";
import Home from "./components/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen">
          <ThemeToggle />
          <Home />
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;
