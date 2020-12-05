import * as React from "react";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { todosFamily, currentTodo } from "../atoms";
import { box } from "./style";
export const Details = () => {
  const todoID = useRecoilValue(currentTodo);
  const todo = useRecoilValue(todosFamily(todoID));
  const viewerDiv = useRef(null);
  return todoID ? (
    <div ref={viewerDiv} style={box}>
      <h3 style={{ marginTop: 0 }}>Details</h3>
      <div>
        {todo.done ? "💯" : "◦"} {todo.description}
      </div>
    </div>
  ) : null;
};
