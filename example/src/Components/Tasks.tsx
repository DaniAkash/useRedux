import React from 'react'
import useRedux from '@daniakash/useredux'
import { toggleTodo } from '../redux/actions/actions'
import { visibilityFilters } from '../redux/constants/visibilityFilter'
import { todoType } from '../redux/reducer/todosReducer'
import { visibilityFilterActionType } from '../redux/reducer/visibilityFilterReducer'
import store from '../redux/store/store'

const getVisibileTodos = (
  todos: todoType[],
  filter: visibilityFilterActionType['filter']
) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos

    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed)

    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed)

    default:
      return []
  }
}

const Tasks = () => {
  const { todos, visibilityFilter } = useRedux(store)

  const tasks = getVisibileTodos(todos, visibilityFilter)

  return (
    <ul>
      {tasks.map((task, taskIndex) => {
        return (
          <li
            onClick={() => store.dispatch(toggleTodo(taskIndex))}
            key={taskIndex}
          >
            {task.text} {task.completed ? '✔️' : '❌'}
          </li>
        )
      })}
    </ul>
  )
}

export default Tasks
