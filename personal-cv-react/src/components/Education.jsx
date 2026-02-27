function Education() {
  const educationData = [
    {
      level: "Tertiary",
      program: "Bachelor Science of Information Technology",
      institution: "USTP – CDO Campus",
      year: "2028",
    },
    {
      level: "Upper Secondary",
      program: "STEM-ACAD",
      institution: "PHINMA COC – Carmen Campus",
      year: "2023",
    },
    {
      level: "Secondary",
      program: "NONE",
      institution: "PHINMA COC – Carmen Campus",
      year: "2021",
    },
    {
      level: "Primary",
      program: "NONE",
      institution: "Liceo De Cagayan University",
      year: "2017",
    },
  ];

  return (
    <section id="education" className="card">
      <h2>Education</h2>
      <table border="1" cellPadding="3" cellSpacing="0">
        <thead>
          <tr>
            <th>Education Level</th>
            <th>Program</th>
            <th>Institution</th>
            <th>Year Graduated</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((row, index) => (
            <tr key={index}>
              <td>{row.level}</td>
              <td>{row.program}</td>
              <td>{row.institution}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Education;
