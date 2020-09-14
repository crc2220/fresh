import { atom } from "recoil";
export const todosState = atom({
  key: "todos",
  default: [
    { description: "do this today", done: false },
    { description: "do this now", done: true },
  ],
});
