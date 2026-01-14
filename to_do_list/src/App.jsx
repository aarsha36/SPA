import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") return;

    setTodos([
      ...todos,
      { text: text, completed: false }
    ]);
    setText("");
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="todo-box">
        <h1>To-Do List</h1>

        <div className="input-row">
          <input
            type="text"
            value={text}
            placeholder="Add a task..."
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li className="todo-item" key={index}>
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => toggleTodo(index)}
              >
                {todo.text}
              </span>

              <button onClick={() => removeTodo(index)}>✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
