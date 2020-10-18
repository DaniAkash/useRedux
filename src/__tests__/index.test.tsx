import { renderHook, act } from '@testing-library/react-hooks'
import useRedux from '../index'
import createCountStore from '../stores/counter'
import createTodosStore, {
  visibilityFilters,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
} from '../stores/todos'

describe('Testing the counter store', () => {
  it('Renders & Updates the counter', () => {
    const countStore = createCountStore()
    const { result } = renderHook(() => useRedux(countStore))
    expect(result.current).toBe(0)
    act(() => {
      countStore.dispatch({ type: 'increment' })
    })
    expect(result.current).toBe(1)
    act(() => {
      countStore.dispatch({ type: 'decrement' })
    })
    expect(result.current).toBe(0)
  })
})

describe('Testing the todos store', () => {
  it('Renders & updates the todos', () => {
    const todosStore = createTodosStore()
    const { result } = renderHook(() => useRedux(todosStore))
    expect(result.current.todos.length).toBe(3)
    expect(result.current.visibilityFilter).toBe(visibilityFilters.SHOW_ALL)
    act(() => {
      todosStore.dispatch({
        type: SET_VISIBILITY_FILTER,
        filter: visibilityFilters.SHOW_ACTIVE
      })
    })
    expect(result.current.visibilityFilter).toBe(visibilityFilters.SHOW_ACTIVE)
    act(() => {
      todosStore.dispatch({
        type: ADD_TODO,
        text: 'New Task'
      })
    })
    expect(result.current.todos.length).toBe(4)
    act(() => {
      todosStore.dispatch({
        type: TOGGLE_TODO,
        index: 0
      })
    })
    expect(result.current.todos.filter((item) => item.completed).length).toBe(1)
  })

  it('Works with slices of store', () => {
    const todosStore = createTodosStore()
    const { result } = renderHook(() => useRedux(todosStore, 'todos'))
    expect(result.current.length).toBe(3)
    act(() => {
      todosStore.dispatch({
        type: ADD_TODO,
        text: 'New Task'
      })
    })
    expect(result.current.length).toBe(4)
    act(() => {
      todosStore.dispatch({
        type: TOGGLE_TODO,
        index: 0
      })
    })
    expect(result.current.filter((item) => item.completed).length).toBe(1)
  })
})
