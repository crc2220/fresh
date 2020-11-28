import * as React from "react";
import { atomFamily, useRecoilValue } from "recoil";
import { ITodo } from "../types/Todo";
export const todoStateFamily = atomFamily({
  key: "todo",
  default: {
    description: "",
    done: false,
  },
});

interface Props {
  todo: ITodo;
  toggleTodo: Function;
  id: Number;
}

export const Todo = ({ todo, toggleTodo, id }: Props) => {
  return (
    <li onClick={() => toggleTodo(id)}>
      {todo.description} {todo.done.toString()}
    </li>
  );
};
