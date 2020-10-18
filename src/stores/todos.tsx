import { createStore, Store, Reducer, combineReducers } from 'redux'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const visibilityFilters: {
  SHOW_ALL: 'SHOW_ALL'
  SHOW_COMPLETED: 'SHOW_COMPLETED'
  SHOW_ACTIVE: 'SHOW_ACTIVE'
} = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const defaultState: {
  todos: todoType[]
  visibilityFilter: visibilityFilterActionType['filter']
} = {
  todos: [
    {
      text: 'Consider using Redux',
      completed: false
    },
    {
      text: 'Keep all state in a single store',
      completed: false
    },
    {
      text: 'Check React Redux',
      completed: false
    }
  ],
  visibilityFilter: visibilityFilters.SHOW_ALL
}

export type todosActionsType =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; index: number }

export type todoType = {
  text: string
  completed: boolean
}

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
      ]

    case TOGGLE_TODO:
      return prevState.map((item, index) => {
        if (index === action.index) {
          return {
            ...item,
            completed: !item.completed
          }
        }

        return item
      })

    default:
      return prevState
  }
}

export type visibilityFilterActionType = {
  type: 'SET_VISIBILITY_FILTER'
  filter: 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'
}

const visibilityFilterReducer: Reducer<
  visibilityFilterActionType['filter'],
  visibilityFilterActionType
> = (prevState = defaultState.visibilityFilter, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter

    default:
      return prevState
  }
}

export interface ApplicationState {
  todos: todoType[]
  visibilityFilter: visibilityFilterActionType['filter']
}

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

const createTodosStore: () => Store<ApplicationState> = () =>
  createStore(rootReducer)

export default createTodosStore
