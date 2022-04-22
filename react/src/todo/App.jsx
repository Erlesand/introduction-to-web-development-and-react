import { useEffect, useState } from "react";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

const initialTodos = require("./todos.json");

export const App = () => {
  const [todos, setTodos] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status !== "idle") {
      return;
    }

    const fetchTodos = async () => {
      setStatus("loading");

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();

        setTodos(todos.map(({ userId, ...todo }) => todo));
        setStatus("success");
      } catch (error) {
        setStatus("failure");
      }
    };

    fetchTodos();
  }, [status]);

  useEffect(() => {
    console.log("Re-render");
    const incomplete = todos?.reduce((count, todo) => count + !todo.completed, 0);

    document.title = `Todos (${todos ? incomplete : "N/A"})`;
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      completed: false,
      title,
    };

    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  };

  if (status === "loading") {
    return "Loading todos...";
  }

  if (status === "failure") {
    return "An error occurred while loading todos!";
  }

  return (
    <>
      <TodoForm createTodo={createTodo} />

      {/* {initialTodos.map(({ userId, ...todo }) => (
        <Todo key={todo.id} {...todo} />
      ))} */}

      {todos?.map(({ id, title, completed }) => (
        <Todo key={id} id={id} title={title} completed={completed} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
    </>
  );
};
