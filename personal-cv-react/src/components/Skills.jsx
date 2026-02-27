import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <section id="skills">
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>

      {visible && (
        <div className="card">
          <h2>Skills</h2>
          <ul>
            <li>Printing</li>
            <li>Xerox</li>
            <li>Photocopy</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default Skills;
