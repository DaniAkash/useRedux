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
      if (key) {
        const nextState = store.getState()[key]
        if (state !== nextState) {
          setState(nextState)
        }
      } else {
        setState(store.getState())
      }
    })
    return () => {
      unsubscribe()
    }
  }, [store, key])

  return state
}

export default useRedux
