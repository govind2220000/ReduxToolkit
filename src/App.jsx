import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Learn</h1>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </>
  );
}

export default App;
