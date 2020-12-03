import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { rehydrateTodosSelector } from "../selectors";

export const useRehydrate = () => {
  const [_, rehyrdateTodos] = useRecoilState(rehydrateTodosSelector);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      rehyrdateTodos(todos);
    }
  }, []);
};
