import "./App.css";

import ClickCounter from "./ClickCounter";
import PrimeCalculator from "./PrimeCalculator";
import FormReducer from "./FormReducer";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import LayoutEffectExample from "./LayoutEffectExample";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Laboratorium 7 – React (hooki zaawansowane)</h1>
        </header>

        <div className="content">
          <div className="exercise">
            <h2>Ćwiczenie 1: useRef – licznik bez re-renderu</h2>
            <ClickCounter />
            <p>(Wynik zobaczysz w konsoli przeglądarki – F12 → Console)</p>
          </div>

          <div className="exercise">
            <h2>Ćwiczenie 2: useMemo – kosztowna operacja</h2>
            <PrimeCalculator />
          </div>

          <div className="exercise">
            <h2>Ćwiczenie 3: useReducer – formularz</h2>
            <FormReducer />
          </div>

          <div className="exercise">
            <h2>Ćwiczenie 4: useContext – motyw aplikacji</h2>
            <ThemeSwitcher />
          </div>

          <div className="exercise">
            <h2>Ćwiczenie 5: useLayoutEffect – pomiar wysokości</h2>
            <LayoutEffectExample />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
