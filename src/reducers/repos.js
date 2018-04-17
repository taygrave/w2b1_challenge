// @flow
import {
  type AnyAction,
  type ButtonClickState as State
} from '../types'

export default (state: State = {}, action: AnyAction): State => {
  switch (action.type) {
    case 'FETCHED_REPOS': {
      const { data, user } = action

      return {
        ...state,
        data,
        user
      }
    }
    default:
      return state
  }
}
