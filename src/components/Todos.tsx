import * as React from "react";
import { useRecoilValue } from "recoil";
import { Todo } from "./Todo";
import { todosIDs } from "../atoms";
export const Todos = () => {
  const todos = useRecoilValue(todosIDs);
  return (
    <ul>
      {todos.map((id, index) => {
        return <Todo id={id} key={index} />;
      })}
    </ul>
  );
};
