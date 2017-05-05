import React from 'react'
import {
  BrowserRouter,
  Route,
  hashHistory
} from 'react-router-dom'

import CounterContainer from '../containers/counterContainer'
import AppContainer from '../containers/appContainer'

const routes = (
  <BrowserRouter history={hashHistory} basename='#'>
    <AppContainer>
      <Route path='/counter' component={CounterContainer} />
    </AppContainer>
  </BrowserRouter>
  )

export default routes
