import { selector, useRecoilValue } from "recoil";
import { todosIDs, todosFamily } from "../atoms";
export const todosSelector = selector({
  key: "todosSelector",
  get: ({ get }) => {
    return get(todosIDs).map((id) => {
      return get(todosFamily(id));
    });
  },
});
export const rehydrateTodosSelector = selector({
  key: "rehydrateTodosSelector",
  get: () => {},
  set: ({ set }, todos: any) => {
    for (let todo of todos) {
      set(todosFamily(todo.id), () => todo);
      set(todosIDs, (currVal) => {
        return [...currVal, todo.id];
      });
    }
  },
});
