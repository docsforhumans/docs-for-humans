import React from 'react'
import {PropTypes} from 'prop-types'

import {Nav} from './styled/Header'

function CurrentHeader({page, id, children}) {
  if (page === id) {
    return <h3>{children}</h3>
  }
  if (page === 0 && id === 1) {
    return <h3>{children}</h3>
  }
  return <h4>{children}</h4>
}

CurrentHeader.propTypes = {
  page: PropTypes.number,
  id: PropTypes.number,
  children: PropTypes.any,
}

export default function Header({page, changePage}) {
  return (
    <Nav>
      <a onClick={changePage(1)}>
        <CurrentHeader
          page={page}
          id={1}
        >
          Home
        </CurrentHeader>
      </a>
      <a onClick={changePage(2)}>
        <CurrentHeader
          page={page}
          id={2}
        >
          What?
        </CurrentHeader>
      </a>
      <a onClick={changePage(3)}>
        <CurrentHeader
          page={page}
          id={3}
        >
          How?
        </CurrentHeader>
      </a>
      <a onClick={changePage(4)}>
        <CurrentHeader
          page={page}
          id={4}
        >
          Why?
        </CurrentHeader>
      </a>
    </Nav>
  )
}

Header.propTypes = {
  page: PropTypes.number,
  changePage: PropTypes.func,
}
