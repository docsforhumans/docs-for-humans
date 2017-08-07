import React from 'react'
import {PropTypes} from 'prop-types'
import {compose, withState, withProps, lifecycle} from 'recompose'
import random from 'lodash/random'

import NotHumans from './NotHumans'
import nonHumans from 'assets/svg/nonHumans'

function Home({nonHuman, setNonHuman, opacity, setOpacity, components, shadowAngle}) {
  return (
    <div>
      <h1
        style={{textShadow: `${shadowAngle}px 7px 20px rgba(0, 0, 0, 0.25)`}}
      >
        Docs For
      </h1>
      <h2
        display-if={nonHuman === 0}
        style={{opacity, transitionProperty: 'opacity', transitionDuration: '1s', textShadow: `${shadowAngle}px 7px 20px rgba(0, 0, 0, 0.25)`}}
      >
        Humans
      </h2>
      <NotHumans
        display-if={nonHuman !== 0}
        components={components}
        nonHuman={nonHuman}
        opacity={opacity}
        shadowAngle={shadowAngle}
      />
    </div>
  )
}

Home.propTypes = {
  nonHuman: PropTypes.number,
  setNonHuman: PropTypes.func,
  opacity: PropTypes.number,
  setOpacity: PropTypes.func,
  components: PropTypes.array,
  shadowAngle: PropTypes.number,
}

export default compose(
  withState('nonHuman', 'setNonHuman', 0),
  withState('opacity', 'setOpacity', 1),
  withState('intervalID', 'setIntervalID', undefined),
  withState('timer1ID', 'setTimer1ID', undefined),
  withState('timer2ID', 'setTimer2ID', undefined),
  withProps(props => {
    const {setOpacity, setNonHuman, nonHuman, setTimer1ID, setTimer2ID} = props

    const components = [
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
    ]

    function changeNonHuman() {
      setNonHuman(rollNum())
      function rollNum() {
        const randomNum = random(1, components.length - 1)
        if (randomNum === nonHuman) {
          return rollNum()
        } else {
          setTimer2ID(setTimeout(() => setOpacity(1), 100))
          return randomNum
        }
      }
    }

    return {
      components,
      transition: () => {
        setOpacity(0)
        setTimer1ID(setTimeout(changeNonHuman, 1000))
      },
    }
  }),
  lifecycle({
    componentDidMount() {
      const {setIntervalID, transition} = this.props
      setIntervalID(setInterval(transition, 5000))
    },
    componentWillUnmount() {
      const {intervalID, timer1ID, timer2ID} = this.props
      clearInterval(intervalID)
      clearTimeout(timer1ID)
      clearTimeout(timer2ID)
    },
  }),
)(Home)
