import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <main>
          <About />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
      <footer style={{ textAlign: "center", padding: "20px" }}>
        <p>&copy; 2026 Kyrvee. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
