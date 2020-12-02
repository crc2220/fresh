import { useRef } from "react";
import { useRecoilState } from "recoil";
import { rehydrateTodosSelector } from "../selectors";

export const useRehydrate = () => {
  const [_, rehyrdateTodos] = useRecoilState(rehydrateTodosSelector);
  const todos = JSON.parse(localStorage.getItem("todos"));
  // run exactly once -- can't use useEffect so using useRef
  let ran = useRef(0);
  if (todos && !ran.current) {
    rehyrdateTodos(todos);
    ran.current = 1;
  }
};
