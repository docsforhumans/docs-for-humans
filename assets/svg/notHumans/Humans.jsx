import React from 'react'
import PropTypes from 'prop-types'

export default function Humans({color, opacity}) {
  return <h2>Humans</h2>
}

Humans.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.number,
}
