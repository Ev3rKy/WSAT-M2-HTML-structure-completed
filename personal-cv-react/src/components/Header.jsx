function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <h1>KYRVEE ANGELA P. BONILLA</h1>
      <p>IT Student | Web Systems and Technologies</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
