import React, { Component } from 'react'
import { UIRouter, UIView } from '@uirouter/react'
import router from '../uirouter.jsx'

class MainController extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <UIRouter router={ router }>
          <UIView/>
        </UIRouter>
      </main>
    )
  }
}

export default MainController
