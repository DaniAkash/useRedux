import { useEffect, useState } from 'react'
import { Store } from 'redux'

function useRedux<K>(store: Store<K>, key?: undefined): K
function useRedux<K, T extends keyof K>(store: Store<K>, key: T): K[T]
function useRedux(store: any, key: any) {
  const [state, setState] = useState(() => {
    if (key) {
      return store.getState()[key]
    }
    return store.getState()
  })

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const nextState = key ? store.getState()[key] : store.getState()
      if (state !== nextState) {
        setState(nextState)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [store, key, state])

  return state
}

export default useRedux
