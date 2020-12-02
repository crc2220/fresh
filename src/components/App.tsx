import * as React from "react";
import { useRef } from "react";
import { useRehydrate } from "../hooks";
import { Todos } from "./Todos";
import { Form } from "./Form";
import { Viewer } from "./Viewer";
import { fifty, box } from "./style";
export const App = (): JSX.Element => {
  // rehydrate todos
  useRehydrate();

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
