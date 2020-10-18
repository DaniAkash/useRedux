import { visibilityFilters } from "../constants/visibilityFilter";
import { todoType } from "../reducer/todosReducer";
import { visibilityFilterActionType } from "../reducer/visibilityFilterReducer";

export const defaultState: {
  todos: todoType[];
  visibilityFilter: visibilityFilterActionType["filter"];
} = {
  todos: [
    {
      text: "Consider using Redux",
      completed: false
    },
    {
      text: "Keep all state in a single store",
      completed: false
    },
    {
      text: "Check React Redux",
      completed: true
    }
  ],
  visibilityFilter: visibilityFilters.SHOW_ALL
};
