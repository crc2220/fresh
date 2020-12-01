import * as React from "react";
import { useRecoilValue, useRecoilCallback } from "recoil";
import { todosFamily, todosIDs, currentTodo } from "../atoms";

interface Props {
  id: string;
}

export const Todo = ({ id }: Props) => {
  const todo = useRecoilValue(todosFamily(id));
  const removeTodo = useRecoilCallback(
    ({ set, snapshot }) => (todoID: string) => {
      set(todosIDs, (currVal) => {
        return currVal.filter((x) => x !== todoID);
      });
      const _currentTodo = snapshot.getLoadable(currentTodo).contents;
      if (_currentTodo === todoID) {
        set(currentTodo, (currVal) => null);
      }
    }
  );
  const setCurrentTodo = useRecoilCallback(({ set }) => (todoID: string) => {
    set(currentTodo, () => todoID);
  });
  return (
    <li>
      <span onClick={() => setCurrentTodo(id)}>{todo.description}</span>{" "}
      <button onClick={() => removeTodo(id)}>-</button>
    </li>
  );
};
