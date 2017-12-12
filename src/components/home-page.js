// @flow
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { clickButton } from '../actions'

type HomeProps = {
  buttonClicks: number,
  clickButton: typeof clickButton
}

class HomePage extends Component<HomeProps> {
  render () {
    const {
      buttonClicks,
      clickButton
    } = this.props

    return (
      <div className='home-page'>
        <h1>Customized Starter Template</h1>
        <Button bsStyle='info' onClick={clickButton}>
          Click Me To Fire an Action
        </Button>
        {buttonClicks > 0
          ? <div>You clicked the button {buttonClicks} times!</div>
          : null
        }
      </div>
    )
  }
}

export const Unconnected = HomePage

export default connect(
  (state) => ({
    buttonClicks: state.buttonClicks
  }),
  {
    clickButton
  }
)(HomePage)
