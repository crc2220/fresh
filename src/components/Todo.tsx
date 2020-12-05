import * as React from "react";
import { useRecoilValue, useRecoilCallback } from "recoil";
import { todosFamily, todosIDs, currentTodo } from "../atoms";
import { todosSelector } from "../selectors";
interface Props {
  id: string;
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { pointer } from "./style";

export const Todo = ({ id }: Props) => {
  const todo = useRecoilValue(todosFamily(id));

  // abstract out with other useTodo hooks?
  const setCurrentTodo = useRecoilCallback(({ set }) => (todoID: string) => {
    set(currentTodo, () => todoID);
    localStorage.setItem("currentTodo", JSON.stringify(todoID));
  });

  // useRemoveTodo
  const removeTodo = useRecoilCallback(
    ({ set, snapshot }) => async (todoID: string) => {
      set(todosIDs, (currVal) => currVal.filter((x) => x !== todoID));

      const _currentTodo = snapshot.getLoadable(currentTodo).contents;
      if (_currentTodo === todoID) {
        set(currentTodo, () => null);
      }
      let currTodos = await snapshot.getPromise(todosSelector);
      currTodos = currTodos.filter((todo) => todo.id !== todoID);
      localStorage.setItem("todos", JSON.stringify(currTodos));
    }
  );

  // useToggleTodo
  const toggleTodo = useRecoilCallback(
    ({ set, snapshot }) => async (todoID: string) => {
      set(todosFamily(todoID), (todo) => {
        return { ...todo, done: !todo.done };
      });
      let currTodos = await snapshot.getPromise(todosSelector);
      currTodos = currTodos.map((todo) => {
        if (todo.id === todoID) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
      localStorage.setItem("todos", JSON.stringify(currTodos));
    }
  );

  return (
    <li>
      <input
        onClick={() => toggleTodo(id)}
        type="checkbox"
        checked={todo.done}
      />{" "}
      <span style={pointer} onClick={() => setCurrentTodo(id)}>
        {todo.description}
      </span>{" "}
      <FontAwesomeIcon
        style={pointer}
        icon={faTrash}
        onClick={() => removeTodo(id)}
      />
    </li>
  );
};
