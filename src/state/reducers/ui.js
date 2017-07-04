import {uiTypes} from 'state/actions/ui'

const initialState = {
  test: true,
}

export function ui(state = initialState, action) {
  switch (action.type) {

    case uiTypes.TEST:
      return {
        ...state,
        test: !state.test,
      }

    default:
      return state

  }
}
