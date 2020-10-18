import React from 'react'
import Link from './Link'
import useRedux from '@daniakash/useredux'
import store from '../redux/store/store'
import { visibilityFilters } from '../redux/constants/visibilityFilter'
import { setVisibilityFilter } from '../redux/actions/actions'

const Footer = () => {
  const filter = useRedux(store, 'visibilityFilter')

  return (
    <div>
      <span>Show: </span>
      <Link
        onClick={() =>
          store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_ALL))
        }
        active={filter === visibilityFilters.SHOW_ALL}
      >
        All
      </Link>
      <Link
        onClick={() =>
          store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_ACTIVE))
        }
        active={filter === visibilityFilters.SHOW_ACTIVE}
      >
        Active
      </Link>
      <Link
        onClick={() =>
          store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_COMPLETED))
        }
        active={filter === visibilityFilters.SHOW_COMPLETED}
      >
        Completed
      </Link>
    </div>
  )
}

export default Footer
