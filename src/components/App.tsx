import * as React from "react";
import { Todos } from "./Todos";
import { Form } from "./Form";

export const App = (): JSX.Element => {
  return (
    <>
      <h1>Todos</h1>
      <Form />
      <Todos />
    </>
  );
};
