// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import App from './app'

type Props = {
  store: Object,
  history: Object
}

export default class Root extends Component<Props, {}> {
  render () {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    )
  }
}
