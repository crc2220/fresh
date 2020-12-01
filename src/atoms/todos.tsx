import { atom, atomFamily } from "recoil";

export const todosFamily = atomFamily({
  key: "todos",
  default: { description: "", id: "" },
});

export const todosIDs = atom({
  key: "todosIDs",
  default: [],
});
