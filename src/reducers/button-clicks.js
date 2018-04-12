// @flow
import {
  type AnyAction,
  type ButtonClickState as State
} from '../types'

export default (state: State = 0, action: AnyAction): State => {
  switch (action.type) {
    case 'CLICKED_BUTTON': {
      return state + 1
    }
    default:
      return state
  }
}
