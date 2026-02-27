function About() {
  return (
    <section id="about" className="card">
      <h2>About Me</h2>
      <p>An IT student, studying at USTP.</p>
      <div style={{ textAlign: "center", margin: "15px 0" }}>
        <img
          src="images/profile.jpg"
          alt="Profile photo"
          width="300"
          height="300"
          style={{ borderRadius: "8px" }}
        />
      </div>
      <p>
        Email:{" "}
        <a href="mailto:bonillakyrveeangelapaks@gmail.com">
          bonillakyrveeangelapaks@gmail.com
        </a>
        <br />
        GitHub:{" "}
        <a href="https://github.com" target="_blank" rel="noreferrer">
          github.com
        </a>
      </p>
    </section>
  );
}

export default About;
