import * as React from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Todo } from "./Todo";
import { todosIDs } from "../atoms";
import { box } from "./style";
export const Todos = () => {
  const todos = useRecoilValue(todosIDs);
  useEffect(() => {
    document.title = `${todos.length} todos`;
  }, [todos]);
  return (
    <ul style={{ ...box, marginTop: "0px" }}>
      {todos.map((id, index) => {
        return <Todo id={id} key={id} />;
      })}
    </ul>
  );
};
