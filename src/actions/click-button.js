// @flow
/* globals Dispatch */
import type { AnyAction } from '../types'

export const clickButton = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch({
    type: 'CLICKED_BUTTON'
  })
}
