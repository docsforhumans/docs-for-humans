import {SiteStyles} from 'components/styled/SiteStyles'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import 'normalize.css'

export default class Site extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {children} = this.props
    return (
      <SiteStyles>
        {children}
      </SiteStyles>
    )
  }
}
