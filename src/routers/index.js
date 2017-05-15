import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  hashHistory
} from 'react-router-dom'

import CounterContainer from '@/containers/counterContainer'
import AppContainer from '@/containers/appContainer'
import HomeContainer from '@/containers/homeContainer'
import NoMatchContainer from '@/containers/noMatchContainer'
const routes = (
  <BrowserRouter history={hashHistory} basename='#'>
    <AppContainer>
      <Switch>
        <Route path='/counter' component={CounterContainer} />
        <Route path='/home' component={HomeContainer}/>
        <Route component={NoMatchContainer} />
        <Redirect to={{pathname: '/home'}}/>
      </Switch>
    </AppContainer>
  </BrowserRouter>
  )

export default routes
