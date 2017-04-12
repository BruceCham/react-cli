import React,{Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  browserHistory,
  Redirect
} from 'react-router-dom'

import counterContainer from '../containers/counterContainer'
import App from '../components/app'

const routes = (
  <Router history={hashHistory} basename='#'>
    <App>
      <Route path="/counter" component={counterContainer}>
      </Route>
    </App>
  </Router>
  )

export default routes

