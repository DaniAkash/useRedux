<div align="center">

# useRedux 🪐

Hook to connect redux store to react components

[![Build Status][build-badge]][build]
[![Maintainability][maintainability-badge]][maintainability-url]
[![Test Coverage][coverage-badge]][coverage-url]

[![Version][version-badge]][package]
[![Downloads][downloads-badge]][npmtrends]
[![Bundlephobia][bundle-phobia-badge]][bundle-phobia]

[![Star on GitHub][github-star-badge]][github-star]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Twitter Follow][twitter-badge]][twitter]

[![donate][coffee-badge]][coffee-url]
[![sponsor][sponsor-badge]][sponsor-url]
[![support][support-badge]][support-url]

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

[coffee-badge]: https://img.shields.io/badge/-%E2%98%95%EF%B8%8F%20buy%20me%20a%20coffee-e85b46
[coffee-url]: https://www.buymeacoffee.com/daniakash
[sponsor-badge]: https://img.shields.io/badge/-%F0%9F%8F%85%20sponsor%20this%20project-e85b46
[sponsor-url]: https://www.buymeacoffee.com/daniakash/e/6983
[support-badge]: https://img.shields.io/badge/-Get%20Support-e85b46
[support-url]: https://www.buymeacoffee.com/daniakash/e/7030
[build]: https://github.com/react-native-toolkit/useRedux/actions
[build-badge]: https://github.com/react-native-toolkit/useRedux/workflows/build/badge.svg
[coverage-badge]: https://api.codeclimate.com/v1/badges/a17808d5e49c028fc7b9/test_coverage
[coverage-url]: https://codeclimate.com/github/react-native-toolkit/useRedux/test_coverage
[maintainability-badge]: https://api.codeclimate.com/v1/badges/a17808d5e49c028fc7b9/maintainability
[maintainability-url]: https://codeclimate.com/github/react-native-toolkit/useRedux/maintainability
[bundle-phobia-badge]: https://badgen.net/bundlephobia/minzip/@daniakash/useredux
[bundle-phobia]: https://bundlephobia.com/result?p=@daniakash/useredux
[downloads-badge]: https://img.shields.io/npm/dm/@daniakash/useredux.svg
[npmtrends]: http://www.npmtrends.com/@daniakash/useredux
[package]: https://www.npmjs.com/package/@daniakash/useredux
[version-badge]: https://img.shields.io/npm/v/@daniakash/useredux.svg
[twitter]: https://twitter.com/dani_akash_
[twitter-badge]: https://img.shields.io/twitter/follow/dani_akash_?style=social
[github-watch-badge]: https://img.shields.io/github/watchers/react-native-toolkit/useredux.svg?style=social
[github-watch]: https://github.com/react-native-toolkit/useredux/watchers
[github-star-badge]: https://img.shields.io/github/stars/react-native-toolkit/useredux.svg?style=social
[github-star]: https://github.com/react-native-toolkit/useredux/stargazers
