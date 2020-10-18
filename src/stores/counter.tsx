import { createStore } from 'redux'

const countReducer = (
  prevState = 0,
  action: { type: 'increment' | 'decrement' }
): number => {
  switch (action.type) {
    case 'increment':
      return prevState + 1

    case 'decrement':
      return prevState - 1

    default:
      return prevState
  }
}

const createCountStore = () => createStore(countReducer)

export default createCountStore
