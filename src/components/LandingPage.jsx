import DocumentTitle from 'react-document-title'
import React from 'react'
import {PropTypes} from 'prop-types'
import {compose, withState, withProps, withHandlers, lifecycle} from 'recompose'
import random from 'lodash/random'

import NotHumans from 'components/NotHumans/NotHumans'
import nonHumans from 'assets/svg/nonHumans'
import {Spacer} from 'components/styled/utils'

function LandingPage({nonHuman, setNonHuman, opacity, setOpacity, components}) {
  return (
    <DocumentTitle title="Docs For Humans">

      <div>
        <Spacer width="100%" height="calc(50vh - 8.125em)" />
        <h1>Docs For</h1>
        <h2
          display-if={nonHuman === 0}
          style={{opacity, transitionDuration: '1s'}}
        >
          Humans
        </h2>
        <NotHumans
          display-if={nonHuman !== 0}
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
  withProps({components: [
    null,
    nonHumans.Alien,
    nonHumans.Cat,
    nonHumans.Caterpillar,
    nonHumans.Centaur,
    nonHumans.Dog,
    nonHumans.Fly,
    nonHumans.Frankenstein,
    nonHumans.Ghost,
    nonHumans.Gnome,
    nonHumans.Monkey,
    nonHumans.Monster,
    nonHumans.Owl,
    nonHumans.Robot,
    nonHumans.Slug,
    nonHumans.Troll,
    nonHumans.Vampire,
    nonHumans.Whale,
  ]}),
  withHandlers({
    changeNonHuman: props => () => {
      const {setOpacity, setNonHuman, nonHuman, components} = props
      setNonHuman(rollNum())
      function rollNum() {
        const randomNum = random(1, components.length - 1)
        if (randomNum === nonHuman) {
          return rollNum()
        } else {
          setTimeout(() => setOpacity(1), 100)
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
