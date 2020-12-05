import * as React from "react";
import { useRehydrate } from "../hooks";
import { Todos } from "./Todos";
import { Form } from "./Form";
import { Details } from "./Details";
import { box, fContainer, fRow, fGrowOne, fBasisHalf } from "./style";
import "./style.css";
export const App = (): JSX.Element => {
  useRehydrate();

  return (
    <div style={{ ...box, ...fContainer }}>
      <h1>Todos</h1>
      <Form />
      <div style={fRow}>
        <div style={{ ...fGrowOne, ...fBasisHalf }}>
          <Todos />
        </div>
        <div style={{ ...fGrowOne, ...fBasisHalf }}>
          <Details />
        </div>
      </div>
    </div>
  );
};
