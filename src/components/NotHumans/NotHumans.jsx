import React from 'react'
import {PropTypes} from 'prop-types'
import {compose, withState} from 'recompose'
import random from 'lodash/random'

import * as theme from 'constants/theme'
import No from 'assets/svg/notHumans/No'
import Frankenstein from 'assets/svg/notHumans/Frankenstein'
import Alien from 'assets/svg/notHumans/Alien'
import Troll from 'assets/svg/notHumans/Troll'
import {Styles} from './styles'

const Components = [Frankenstein, Alien, Troll]

function NotHumans({nonHuman, setNonHuman, opacity, setOpacity}) {
  const Component = getNonHuman() || Components[0]
  function transition() {
    setOpacity(0)
    setTimeout(changeNonHuman, 1000)
    function changeNonHuman() {
      const randomNum = random(0, Components.length - 1)
      if (randomNum === nonHuman) {
        changeNonHuman()
      } else {
        setNonHuman(randomNum)
        setTimeout(() => setOpacity(1), 100)
      }
    }
  }
  function getNonHuman() {
    return Components[nonHuman]
  }

  return (
    <Styles onClick={transition}>
      <Component color={theme.color.neutral} opacity={opacity} />
      <No color="red" />
    </Styles>
  )
}

NotHumans.propTypes = {
  nonHuman: PropTypes.number,
  setNonHuman: PropTypes.func,
  opacity: PropTypes.number,
  setOpacity: PropTypes.func,
}

export default compose(
  withState('nonHuman', 'setNonHuman', random(0, Components.length - 1)),
  withState('opacity', 'setOpacity', 1),
)(NotHumans)
