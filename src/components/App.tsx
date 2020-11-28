import * as React from "react";
import { Todos } from "./Todos";
import { todosState } from "../atoms";
import { useRecoilValue } from "recoil";

export const App = (): JSX.Element => {
  const todos = useRecoilValue(todosState);

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
    </>
  );
};
