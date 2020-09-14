import * as React from "react";
import { todosState } from "../atoms";
import { atom, useRecoilState } from "recoil";

export const App = (): JSX.Element => {
  const [todos, setTodos] = useRecoilState(todosState);
  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo, index) => {
      if (index == id) {
        todo = {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li data-id={index} onClick={() => toggleTodo(index)}>
              {todo.description} {todo.done.toString()}
            </li>
          );
        })}
      </ul>
    </>
  );
};
