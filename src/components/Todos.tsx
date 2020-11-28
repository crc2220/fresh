import * as React from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../atoms";
import { Todo } from "./Todo";
import { ITodo } from "../types/Todo";
interface Props {
  todos: ITodo[];
}
export const Todos = ({ todos }: Props) => {
  const setTodos = useSetRecoilState(todosState);

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
    <ul>
      {todos.map((todo, index) => {
        return (
          <Todo toggleTodo={toggleTodo} todo={todo} key={index} id={index} />
        );
      })}
    </ul>
  );
};
