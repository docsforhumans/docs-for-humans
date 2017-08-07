import DocumentTitle from 'react-document-title'
import React from 'react'
import {PropTypes} from 'prop-types'
import {compose, withState, withProps, withHandlers} from 'recompose'

import Header from './Header'
import Home from './Home'
import What from './What'
import How from './How'
import Why from './Why'
import Docs from './Docs'
import Contact from './Contact'

function Site({page, changePage, pages}) {
  const Page = pages[page] || pages[0]
  return (
    <DocumentTitle title="Docs For Humans">

      <div>
        <Header changePage={changePage} />
        <Page />
      </div>

    </DocumentTitle>
  )
}

Site.propTypes = {
  page: PropTypes.number,
  changePage: PropTypes.func,
  pages: PropTypes.array,
}

export default compose(
  withState('page', 'setPage', 0),
  withProps({pages: [
    Home,
    What,
    How,
    Why,
    Docs,
    Contact,
  ]}),
  withHandlers({
    changePage: props => key => () => {
      const {setPage} = props
      setPage(key)
    },
  }),
)(Site)
