import React,{Component} from 'react'
import {
  BrowserRouter,
  Route,
  hashHistory,
  browserHistory,
  Redirect
} from 'react-router-dom'

import counterContainer from '../containers/counterContainer'
import App from '../components/app'

const routes = (
  <BrowserRouter history={hashHistory} basename='#'>
    <App>
      <Route path="/counter" component={counterContainer}>
      </Route>
    </App>
  </BrowserRouter>
  )

export default routes

