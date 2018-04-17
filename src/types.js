// @flow

// /* eslint-disable no-unused-vars */
// // ExtractReturn follows suggestion from https://hackernoon.com/redux-flow-type-getting-the-maximum-benefit-from-the-fewest-key-strokes-5c006c54ec87
// type _ExtractReturn<B, F: (*) => B> = B
// export type ExtractReturn<F> = _ExtractReturn<*, F>

export type Element = string | React$Element<any> | Array<React$Element<any>>

// ACTIONS
export type Init = { type: '@@INIT' }
export type ClickedButton = { type: 'FETCHED_REPOS', data: Object, user: Object}

export type AnyAction =
  Init |
  ClickedButton

// STATES
export type ButtonClickState = Object

export type State = {
  buttonClicks: ButtonClickState
}
