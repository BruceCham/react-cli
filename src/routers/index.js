import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom'

import CounterContainer from '@/containers/CounterContainer'
import AppContainer from '@/containers/AppContainer'
import HomeContainer from '@/containers/HomeContainer'
import NoMatchContainer from '@/containers/NoMatchContainer'
const routes = (
  <HashRouter basename='app'>
    <AppContainer>
      <Switch>
        <Route path='/counter' component={CounterContainer} />
        <Route path='/home' component={HomeContainer}/>
        <Route component={NoMatchContainer} />
      </Switch>
      <Redirect from='/' to='/home'/>
    </AppContainer>
  </HashRouter>
  )

export default routes
