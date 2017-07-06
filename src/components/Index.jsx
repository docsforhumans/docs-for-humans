import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Site from './Site'
import LandingPage from './LandingPage'
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
            <Route path="/" component={Site}>
              <IndexRoute component={LandingPage} />
              {/* <Route path="*" component={NotFound} /> */}
            </Route>
          </Router>
        </Provider>
      </div>
    )
  }
}
