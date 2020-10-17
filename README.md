<div align="center">

# useRedux 🪐

Hook to connect redux store to react components

---

### PRs Welcome 👍✨

</div>

## Motivation

The goal of this library is to provide a simple API to connect your React components to the Redux store. It achieves this by using a single hook `useRedux` that subscribes to the state updates in redux store without any need for the traditional `Provider` or `connect` components.

## Installation

```bash
yarn add @daniakash/useredux

#or

npm i @daniakash/useredux
```

## Usage

Redux store of a simple counter ﹣

```tsx
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

const countStore = createStore(countReducer)

export default countStore
```

Connecting the countStore to React using `useRedux` ﹣

```tsx
import React, { Component } from 'react'
import countStore from './countStore'
import useRedux from '@daniakash/useredux'

const Count = () => {
  const count = useRedux(countStore)

  return <h1>{count}</h1>
}

const Controller = () => {
  const decrement = () =>
    countStore.dispatch({
      type: 'decrement'
    })

  const increment = () =>
    countStore.dispatch({
      type: 'increment'
    })

  return (
    <div>
      <button onClick={decrement}>➖</button>
      <button onClick={increment}>➕</button>
    </div>
  )
}

export default function App() {
  return (
    <div className='App'>
      <Count />
      <Controller />
    </div>
  )
}
```

### Working with multiple reducers

If your store has multiple reducers, you can subscribe to the individual reducers by passing the key of the reducer as the second argument to `useRedux`

If your reducer is ﹣

```tsx
const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

const store: Store<ApplicationState> = createStore(rootReducer)
```

To make your component subscribe to updates only on the todosReducer ﹣

```tsx
const todos = useRedux(store, 'todos')
```

## License

MIT © [DaniAkash](https://github.com/DaniAkash)
