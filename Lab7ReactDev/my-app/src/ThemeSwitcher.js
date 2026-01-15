import { useTheme } from "./ThemeContext";

function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();

  const styles = {
    padding: "16px",
    borderRadius: "8px",
    marginTop: "10px",
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <div style={styles}>
      <p>Aktualny motyw: {dark ? "ciemny" : "jasny"}</p>
      <button onClick={toggleTheme}>Przełącz motyw</button>
    </div>
  );
}

export default ThemeSwitcher;
