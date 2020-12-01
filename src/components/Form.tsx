import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { todosIDs, todosFamily, inputAtom } from "../atoms";
import {
  atom,
  useRecoilState,
  useRecoilCallback,
  SerializableParam,
} from "recoil";
export const Form = () => {
  const [inputVal, setInputVal] = useRecoilState(inputAtom);
  const createTodo = useRecoilCallback(
    ({ set }) => (todoID: SerializableParam, description) => {
      set(todosIDs, (currVal) => [...currVal, todoID]);
      set(todosFamily(todoID), { id: todoID, description });
    },
    []
  );
  const addTodo = () => {
    createTodo(uuidv4(), inputVal);
    setInputVal("");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input onChange={handleInputChange} type="text" value={inputVal} />
      <button onClick={addTodo}>Add</button>
    </form>
  );
};
