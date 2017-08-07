import React from 'react'
import {PropTypes} from 'prop-types'

import * as theme from 'constants/theme'
import No from 'assets/svg/nonHumans/No'
import {Container} from './styled/NotHumans'

export default function NotHumans({nonHuman, opacity, components}) {
  const Component = components[nonHuman] || components[1]
  return (
    <Container>
      <Component color={theme.color.neutral} opacity={opacity} />
      <No color="red" opacity={opacity} />
    </Container>
  )
}

NotHumans.propTypes = {
  nonHuman: PropTypes.number,
  opacity: PropTypes.number,
  components: PropTypes.array,
}
