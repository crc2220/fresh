import * as React from "react";
import { useRecoilValue } from "recoil";
import { todosFamily, currentTodo } from "../atoms";
import { fifty, box } from "./style";
export const Viewer = () => {
  const todoID = useRecoilValue(currentTodo);
  const todo = useRecoilValue(todosFamily(todoID));
  return (
    <div style={{ ...box, ...fifty }}>
      <h3>Details</h3>
      <div>{todo.description}</div>
    </div>
  );
};
