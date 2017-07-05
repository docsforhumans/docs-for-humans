import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {SiteStyles} from 'components/styled/SiteStyles'
import * as theme from 'constants/theme'
import {linearGradient} from 'lib/tools'

import 'normalize.css'

export default class Site extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)
    this.state = {
      gradientAngle: 0,
      shadowAngle: 0,
    }
  }

  handleMouse = (event) => {
    const width = () => document.documentElement.clientWidth
    const xDivisor = width() / 360
    const x = event.clientX / xDivisor
    const gradientX = (x / 10) - 18
    const shadowX = ((x / 40) - 4.5) * -1
    this.setState({
      ...this.state,
      gradientAngle: gradientX,
      shadowAngle: shadowX,
    })
  }

  render() {
    const {children} = this.props
    return (
      <SiteStyles
        style={{
          background: linearGradient(this.state.gradientAngle, theme.color.pink, theme.color.orange),
          textShadow: `${this.state.shadowAngle}px 7px 20px rgba(0, 0, 0, 0.25)`,
        }}
        onMouseMove={this.handleMouse}
      >
        {children}
      </SiteStyles>
    )
  }
}
