import {combineReducers} from 'redux'
import {ui} from './ui'

export const combinedReducers = combineReducers({
  ui: ui,
})
