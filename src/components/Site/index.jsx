import DocumentTitle from 'react-document-title'
import React from 'react'
import {PropTypes} from 'prop-types'
import {compose, withState, withProps, withHandlers} from 'recompose'

import {Spacer} from 'components/styled/utils'

import Header from './Header'
import Home from './Home'
import What from './What'
import How from './How'
import Why from './Why'
import SignUpButton from './styled/SignUpButton'

function Site({page, changePage, pages, shadowAngle}) {
  const Page = pages[page] || pages[1]
  return (
    <DocumentTitle title="Docs For Humans">

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
        <Header
          page={page}
          changePage={changePage}
        />
        {page === 0 && <Spacer width="100%" height="5em" />}
        <Page shadowAngle={shadowAngle} />
        {page === 0 && <Spacer width="100%" height="5em" />}
        {page !== 0 && (
          <SignUpButton
            onClick={changePage(0)}
            style={{boxShadow: `${shadowAngle}px 2px 10px rgba(0, 0, 0, 0.25)`}}
          >
            <h4>Sign Up</h4>
          </SignUpButton>
        )}
        {page === 0 && (
          <SignUpButton
            onClick={changePage(1)}
            shadowAngle={shadowAngle}
          >
            <h4>Done</h4>
          </SignUpButton>
        )}
      </div>

    </DocumentTitle>
  )
}

function SignUp() {
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdBc_csa2ZSKAviYmP8Bf6s6wqdhsnhVPWa_nQrYZz9YKO5tg/viewform?embedded=true"
      width="90%"
      height="100%"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Loading...
    </iframe>
  )
}

Site.propTypes = {
  page: PropTypes.number,
  changePage: PropTypes.func,
  pages: PropTypes.array,
  shadowAngle: PropTypes.number,
}

export default compose(
  withState('page', 'setPage', 1),
  withProps({pages: [
    SignUp,
    Home,
    What,
    How,
    Why,
  ]}),
  withHandlers({
    changePage: props => key => () => {
      const {setPage} = props
      setPage(key)
    },
  }),
)(Site)
