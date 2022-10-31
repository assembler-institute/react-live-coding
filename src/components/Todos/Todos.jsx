import React, { useCallback, useState, memo } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((prevState) => [...prevState, "New todo added"]);
  }, [todos]);

  return (
    <>
      <Todo addTodo={addTodo} todos={todos} />
    </>
  );
};

export default memo(Todos);
