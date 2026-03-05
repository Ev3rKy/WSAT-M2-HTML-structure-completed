function Education({ education }) {
  return (
    <section className="card">
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
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.educationlevel}</td>
              <td>{item.program}</td>
              <td>{item.school}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Education;
