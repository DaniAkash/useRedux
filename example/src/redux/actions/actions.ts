import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
} from "../actionTypes/actionTypes";
import { visibilityFilterActionType } from "../reducer/visibilityFilterReducer";

export function addTodo(text: string) {
  return {
    type: ADD_TODO,
    text
  };
}

export function toggleTodo(index: number) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(
  filter: visibilityFilterActionType["filter"]
) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
