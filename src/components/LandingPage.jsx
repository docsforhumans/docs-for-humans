import DocumentTitle from 'react-document-title'
import React from 'react'
import {PropTypes} from 'prop-types'
import {compose, withState, withProps, withHandlers, lifecycle} from 'recompose'
import random from 'lodash/random'

import NotHumans from 'components/NotHumans/NotHumans'
import Frankenstein from 'assets/svg/notHumans/Frankenstein'
import Alien from 'assets/svg/notHumans/Alien'
import Troll from 'assets/svg/notHumans/Troll'
import {Spacer} from 'components/styled/utils'

function LandingPage({nonHuman, setNonHuman, opacity, setOpacity, components}) {
  return (
    <DocumentTitle title="Docs For Humans">

      <div>
        <Spacer width="100%" height="calc(50vh - 8.125em)" />
        <h1>Docs For</h1>
        <h2 style={{opacity}}>Humans</h2>
        <NotHumans
          components={components}
          nonHuman={nonHuman}
          opacity={opacity}
        />
      </div>

    </DocumentTitle>
  )
}

LandingPage.propTypes = {
  nonHuman: PropTypes.number,
  setNonHuman: PropTypes.func,
  opacity: PropTypes.number,
  setOpacity: PropTypes.func,
  components: PropTypes.array,
}

export default compose(
  withState('nonHuman', 'setNonHuman', 0),
  withState('opacity', 'setOpacity', 1),
  withProps({components: [null, Frankenstein, Alien, Troll]}),
  withHandlers({
    changeNonHuman: props => () => {
      const {setOpacity, setNonHuman, nonHuman, components} = props
      setNonHuman(rollNum())
      function rollNum() {
        const randomNum = random(1, components.length)
        if (randomNum === nonHuman) {
          return rollNum()
        } else {
          setOpacity(1)
          return randomNum
        }
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      const {setOpacity, changeNonHuman} = this.props

      function transition() {
        setOpacity(0)
        setTimeout(changeNonHuman, 1000)
      }

      setInterval(transition, 5000)
    },
  })
)(LandingPage)
