import { createStore, Store } from "redux";
import rootReducer from "../reducer/rootReducer";
import { todoType } from "../reducer/todosReducer";
import { visibilityFilterActionType } from "../reducer/visibilityFilterReducer";

export interface ApplicationState {
  todos: todoType[];
  visibilityFilter: visibilityFilterActionType["filter"];
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
