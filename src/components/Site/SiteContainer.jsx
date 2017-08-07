import React, {Component} from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'

import {SiteStyles} from './styled/SiteStyles'

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
        gradientAngle={this.state.gradientAngle}
        shadowAngle={this.state.shadowAngle}
        onMouseMove={this.handleMouse}
      >
        {children}
      </SiteStyles>
    )
  }
}
