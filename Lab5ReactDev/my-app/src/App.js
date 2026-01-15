import "./App.css";

import Hello from "./Hello";
import HelloWithProps from "./HelloWithProps";
import Counter from "./Counter";
import InputTracker from "./InputTracker";
import LoginStatus from "./LoginStatus";
import TodoList from "./TodoList";
import LoginForm from "./LoginForm";

function App() {
  const todos = ["Zrobić lab 5", "Dodać build", "Push na GitHub"];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Laboratorium 5 – React</h1>
      </header>

      <div className="content">
        <div className="exercise">
          <h2>Ćwiczenie 1</h2>
          <Hello />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 2</h2>
          <HelloWithProps name="Artur" />
          <HelloWithProps name="Tomek" />
          <HelloWithProps name="Jadwiga" />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 3</h2>
          <Counter />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 4</h2>
          <InputTracker />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 5</h2>
          <LoginStatus isLoggedIn={true} />
          <LoginStatus isLoggedIn={false} />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 6</h2>
          <TodoList todos={todos} />
        </div>

        <div className="exercise">
          <h2>Ćwiczenie 7</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
