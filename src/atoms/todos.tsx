import { atom, atomFamily } from "recoil";

export const todosFamily = atomFamily({
  key: "todos",
  default: { description: "", id: "", done: false },
});

export const todosIDs = atom({
  key: "todosIDs",
  default: [],
});

export const inputAtom = atom({
  key: "input",
  default: "",
});

export const currentTodo = atom({
  key: "currentTodo",
  default: "",
});
