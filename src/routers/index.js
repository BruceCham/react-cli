import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom'

import CounterContainer from '@/containers/counterContainer'
import AppContainer from '@/containers/appContainer'
import HomeContainer from '@/containers/homeContainer'
import NoMatchContainer from '@/containers/noMatchContainer'
const routes = (
  <HashRouter>
    <AppContainer>
      <Switch>
        <Route path='/counter' component={CounterContainer} />
        <Route path='/home' component={HomeContainer}/>
        <Route component={NoMatchContainer} />
        <Redirect to={{pathname: '/home'}}/>
      </Switch>
    </AppContainer>
  </HashRouter>
  )

export default routes
