import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { rehydrateTodosSelector } from "../selectors";
import { currentTodo } from "../atoms";

export const useRehydrate = () => {
  const rehyrdateTodos = useSetRecoilState(rehydrateTodosSelector);
  const rehyrdateSelectedTodo = useSetRecoilState(currentTodo);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const currentTodo = JSON.parse(localStorage.getItem("currentTodo"));
    if (todos) {
      rehyrdateTodos(todos);
      rehyrdateSelectedTodo(currentTodo);
    }
  }, []);
};
