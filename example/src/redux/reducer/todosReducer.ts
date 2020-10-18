import { Reducer } from "react";
import { ADD_TODO, TOGGLE_TODO } from "../actionTypes/actionTypes";
import { defaultState } from "../defaultState/defaultState";

export type todosActionsType =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; index: number };

export type todoType = {
  text: string;
  completed: boolean;
};

const todosReducer: Reducer<todoType[], todosActionsType> = (
  prevState = defaultState.todos,
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...prevState,
        {
          text: action.text,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return prevState.map((item, index) => {
        if (index === action.index) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      });

    default:
      return prevState;
  }
};

export default todosReducer;
