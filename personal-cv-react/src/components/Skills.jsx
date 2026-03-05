import { useState } from "react";

function Skills({ skills }) {
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
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Skills;
