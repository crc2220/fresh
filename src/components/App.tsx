import * as React from "react";
import { useRehydrate } from "../hooks";
import { Todos } from "./Todos";
import { Form } from "./Form";
import { Viewer } from "./Viewer";
import { box, fContainer, fRow, fGrowOne } from "./style";
export const App = (): JSX.Element => {
  useRehydrate();

  return (
    <div style={{ ...box, ...fContainer }}>
      <h1>Todos</h1>
      <Form />
      <div style={fRow}>
        <div style={fGrowOne}>
          <Todos />
        </div>
        <div style={fGrowOne}>
          <Viewer />
        </div>
      </div>
    </div>
  );
};
