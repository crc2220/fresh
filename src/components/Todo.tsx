import * as React from "react";
import { useRecoilValue, useRecoilCallback } from "recoil";
import { todosFamily, todosIDs } from "../atoms";

interface Props {
  id: string;
}

export const Todo = ({ id }: Props) => {
  const todo = useRecoilValue(todosFamily(id));
  const removeTodo = useRecoilCallback(({ set }) => (todoID: string) => {
    set(todosIDs, (currVal) => {
      return currVal.filter((x) => x !== todoID);
    });
  });
  return (
    <li>
      {todo.description} <button onClick={() => removeTodo(id)}>-</button>
    </li>
  );
};
