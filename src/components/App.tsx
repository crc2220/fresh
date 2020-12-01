import * as React from "react";
import { Todos } from "./Todos";
import { Form } from "./Form";
import { Viewer } from "./Viewer";
const fifty: React.CSSProperties = {
  width: "50%",
  float: "left",
};
export const App = (): JSX.Element => {
  return (
    <>
      <h1>Todos</h1>
      <div style={fifty}>
        <Form />
        <Todos />
      </div>
      <div style={fifty}>
        <Viewer />
      </div>
    </>
  );
};
