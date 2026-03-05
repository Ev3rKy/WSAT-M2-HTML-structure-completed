import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
const [darkMode, setDarkMode] = useState(false);

const skills = ["Printing","Photocopy","Xerox"];

const education = [
  {year: "2028", program: "Bachelor Science in Information Technology", school: "USTP - CDO Campus", educationlevel: "Tertiary"},
  {year: "2023", program: "STEM - ACAD", school: "PHINMA COC - Carmen Campus", educationlevel: "Upper Secondary"},
  {year: "2021", program: "NONE", school: "PHINMA COC - Carmen Campus", educationlevel: "Secondary"},
  {year: "2017", program: "NONE", school: "Liceo De Cagayan University", educationlevel: "Primary"}
];

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <main>
          <About />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact />
        </main>
      </div>
      <footer style={{ textAlign: "center", padding: "20px" }}>
        <p>&copy; 2026 Kyrvee. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;
