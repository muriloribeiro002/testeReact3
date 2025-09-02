import { useState } from "react";
import "./App.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  const togleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Lista de Tarefas</h1>

      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Nova tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTask} className="todo-button">
          Adicionar
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              onClick={() => toggleTask(todo.id)}
              className={`todo-text ${todo.done ? "done" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTask(todo.id)}
              className="todo-remove"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
