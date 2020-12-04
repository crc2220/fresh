import * as React from "react";
import { useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { todosFamily, currentTodo } from "../atoms";
import { box } from "./style";
export const Viewer = () => {
  const todoID = useRecoilValue(currentTodo);
  const todo = useRecoilValue(todosFamily(todoID));
  const viewerDiv = useRef(null);
  if (todoID && viewerDiv.current) {
    console.log(viewerDiv.current.classList.toggle("fade-in"));
  }
  return todoID ? (
    <div ref={viewerDiv} style={box}>
      <h3 style={{ marginTop: 0 }}>Details</h3>
      <div>{todo.description}</div>
    </div>
  ) : null;
};
