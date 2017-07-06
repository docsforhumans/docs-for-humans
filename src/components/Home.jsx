import DocumentTitle from 'react-document-title'
import React, {Component} from 'react'
import {Spacer} from 'components/styled/utils'
import NotHumans from 'components/NotHumans/NotHumans'

export default class Home extends Component {
  render() {
    return (
      <DocumentTitle title="Docs For Humans">

        <div>
          <Spacer width="100%" height="calc(50vh - 8.125em)" />
          <h1>Docs For</h1>
          <h2>Humans</h2>
          <NotHumans />
        </div>

      </DocumentTitle>
    )
  }
}
