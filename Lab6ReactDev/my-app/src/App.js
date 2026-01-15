import "./App.css";

import ToggleDetails from "./ToggleDetails";
import ScoreDisplay from "./ScoreDisplay";
import TaskList from "./TaskList";
import UserList from "./UserList";
import TimerCounter from "./TimerCounter";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Laboratorium 6 – React</h1>
      </header>

      <div className="content">
        <div className="exercise">
          <h2>Ćwiczenie 1: Warunkowe renderowanie</h2>
          <ToggleDetails />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 2: Wynik punktowy</h2>
          <p>Wynik: 30</p>
          <ScoreDisplay score={30} />
          <p>Wynik: 65</p>
          <ScoreDisplay score={65} />
          <p>Wynik: 90</p>
          <ScoreDisplay score={90} />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 3: Lista z filtrowaniem</h2>
          <TaskList />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 4: Użytkownicy z API</h2>
          <UserList />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 5: Licznik z useEffect</h2>
          <TimerCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
