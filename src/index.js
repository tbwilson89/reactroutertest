import React { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

import App from './App'
import './index.css'.

import { BrowserRouter, Match, Miss } from 'react-router'

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern='/' component={App}/>
        </div>
      </BrowserRouter>
    )
  }
}

render(<Root />, document.getElementById('root'))
