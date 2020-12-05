import * as React from "react";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilCallback } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { todosIDs, todosFamily, inputAtom } from "../atoms";
import { todosSelector } from "../selectors";
import { ITodo } from "../types";
import { box, input, button } from "./style";

export const Form = () => {
  const [inputVal, setInputVal] = useRecoilState(inputAtom);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const createTodo = useRecoilCallback(
    ({ set, snapshot }) => async (todoID: string, description: string = "") => {
      set(todosIDs, (currVal) => [...currVal, todoID]);

      const newTodo: ITodo = { id: todoID, description, done: false };

      set(todosFamily(todoID), () => newTodo);

      let currTodos = await snapshot.getPromise(todosSelector);
      currTodos = [...currTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(currTodos));
    },
    []
  );
  const addTodo = () => {
    if (inputVal.trim().length > 0) {
      createTodo(uuidv4(), inputVal);
      setInputVal("");
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  return (
    <form style={box} onSubmit={(e) => e.preventDefault()}>
      <input
        style={input}
        onChange={handleInputChange}
        type="text"
        value={inputVal}
        ref={inputRef}
      />
      <button style={button} onClick={addTodo}>
        Add
      </button>
    </form>
  );
};
