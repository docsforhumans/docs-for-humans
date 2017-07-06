import React from 'react'
import {PropTypes} from 'prop-types'

import * as theme from 'constants/theme'
import No from 'assets/svg/notHumans/No'
import {Styles} from './styles'

export default function NotHumans({nonHuman, opacity, components}) {
  const Component = getNonHuman() || components[1]
  function getNonHuman() {
    return components[nonHuman]
  }

  return (
    <Styles>
      <Component color={theme.color.neutral} opacity={opacity} />
      <No color="red" />
    </Styles>
  )
}

NotHumans.propTypes = {
  nonHuman: PropTypes.number,
  opacity: PropTypes.number,
  components: PropTypes.array,
}
