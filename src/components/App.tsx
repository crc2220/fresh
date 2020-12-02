import * as React from "react";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { Todos } from "./Todos";
import { Form } from "./Form";
import { Viewer } from "./Viewer";
import { fifty, box } from "./style";
import { rehydrateTodosSelector } from "../selectors";
export const App = (): JSX.Element => {
  const [_, rehyrdateTodos] = useRecoilState(rehydrateTodosSelector);
  const todos = JSON.parse(localStorage.getItem("todos"));
  let ran = useRef(0);
  if (todos && !ran.current) {
    rehyrdateTodos(todos);
    ran.current = 1;
  }

  return (
    <div style={box}>
      <h1>Todos</h1>
      <div style={fifty}>
        <Form />
        <Todos />
      </div>
      <div style={fifty}>
        <Viewer />
      </div>
    </div>
  );
};
