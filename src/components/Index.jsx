import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import SiteContainer from './Site/SiteContainer'
import Site from './Site'
import {Provider} from 'react-redux'

export default class Index extends Component {
  static propTypes = {
    store: PropTypes.object,
  }

  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <Router history={browserHistory}>
            <Route path="/" component={SiteContainer}>
              <IndexRoute component={Site} />
              {/* <Route path="*" component={NotFound} /> */}
            </Route>
          </Router>
        </Provider>
      </div>
    )
  }
}
