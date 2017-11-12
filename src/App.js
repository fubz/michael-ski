import React from 'react'
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'

import './app.css'
import 'typeface-roboto'

import Headbar from './containers/Headbar'

export default () => (
  <Router>
    <div>
      <Headbar />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
