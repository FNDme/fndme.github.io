import Home from "./components/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <ThemeToggle />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
