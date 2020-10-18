import { Reducer } from "react";
import { SET_VISIBILITY_FILTER } from "../actionTypes/actionTypes";
import { defaultState } from "../defaultState/defaultState";

export type visibilityFilterActionType = {
  type: "SET_VISIBILITY_FILTER";
  filter: "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";
};

const visibilityFilterReducer: Reducer<
  visibilityFilterActionType["filter"],
  visibilityFilterActionType
> = (prevState = defaultState.visibilityFilter, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return prevState;
  }
};

export default visibilityFilterReducer;
