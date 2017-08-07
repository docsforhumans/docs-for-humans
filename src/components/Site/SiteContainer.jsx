import React, {Component} from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'

import * as theme from 'constants/theme'
import {linearGradient} from 'lib/tools'

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
    const {shadowAngle, gradientAngle} = this.state
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, {
      shadowAngle,
      gradientAngle,
    }))
    return (
      <SiteStyles
        style={{background: linearGradient(this.state.gradientAngle, theme.color.pink, theme.color.orange)}}
        shadowAngle={this.state.shadowAngle}
        onMouseMove={this.handleMouse}
      >
        {childrenWithProps}
      </SiteStyles>
    )
  }
}
