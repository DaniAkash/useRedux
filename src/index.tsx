import { useEffect, useState } from 'react'
import type { AnyAction, Store } from 'redux'

const useRedux = <K extends Store<any, AnyAction>>(store: K, key?: string) => {
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
