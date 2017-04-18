import React,{Component} from 'react'
import {
  BrowserRouter,
  Route,
  hashHistory,
  browserHistory,
  Redirect
} from 'react-router-dom'

import CounterContainer from '../containers/counterContainer'
import AppContainer from '../containers/appContainer'

const routes = (
  <BrowserRouter history={hashHistory} basename='#'>
    <AppContainer>
      <Route path="/counter" component={CounterContainer}>
      </Route>
    </AppContainer>
  </BrowserRouter>
  )

export default routes

