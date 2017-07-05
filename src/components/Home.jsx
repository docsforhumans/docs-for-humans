import DocumentTitle from 'react-document-title'
import React, {Component} from 'react'
import {HorizontalSpacer} from 'components/styled/utils'

export default class Home extends Component {
  render() {
    return (
      <DocumentTitle title="Docs For Humans">

        <div>
          <HorizontalSpacer height="calc(50vh - 5em)" />
          <h1>Docs for</h1>
          <h2>Humans</h2>
        </div>

      </DocumentTitle>
    )
  }
}
