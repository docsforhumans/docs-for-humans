import React from 'react'
import {PropTypes} from 'prop-types'

import {Nav} from './styled/Header'

export default function Header({changePage}) {
  return (
    <Nav>
      <a onClick={changePage(0)}>Home</a>
      <a onClick={changePage(1)}>What?</a>
      <a onClick={changePage(2)}>How?</a>
      <a onClick={changePage(3)}>Why?</a>
      <a onClick={changePage(4)}>Docs</a>
      <a onClick={changePage(5)}>Contact</a>
    </Nav>
  )
}

Header.propTypes = {
  changePage: PropTypes.func,
}
