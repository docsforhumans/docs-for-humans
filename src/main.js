import {combinedReducers} from './state/reducers/reducers'
import {createStore} from 'redux'
import {render} from 'react-dom'
import Index from './components/Index'
import React from 'react'

function mount(index, reducers) {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  render(
    React.createElement(index, {store}),
    document.getElementById('main')
  )
}

function hotReload() {
  // Hot reload components and reducers.
  const NextIndex = require('./components/Index').default
  const NextStore = require('./state/reducers/reducers')

  mount(NextIndex, NextStore.reducer)
}

mount(Index, combinedReducers)

if (module.hot) {
  module.hot.accept('./components/Index', hotReload)
  module.hot.accept('./state/reducers/reducers', hotReload)
}
