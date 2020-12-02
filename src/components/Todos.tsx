import * as React from "react";
import { useRecoilValue } from "recoil";
import { Todo } from "./Todo";
import { todosIDs } from "../atoms";
import { box } from "./style";
export const Todos = () => {
  const todos = useRecoilValue(todosIDs);
  return (
    <ul style={box}>
      {todos.map((id, index) => {
        return <Todo id={id} key={id} />;
      })}
    </ul>
  );
};
