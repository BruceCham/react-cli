import * as React from 'react'
import {
  Route,
  Switch,
  // BrowserRouter as Router,
  HashRouter as Router,
} from 'react-router-dom'

import CounterContainer from 'containers/CounterContainer'
import AppContainer from 'containers/AppContainer'
import HomeContainer from 'containers/HomeContainer'
import NoMatchContainer from 'containers/NoMatchContainer'
// import FormContainer from 'containers/SimpleFormContainer'
// <Route path='/form' component={FormContainer} />
const routes = (
  <Router>
    <AppContainer>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path='/counter' component={CounterContainer} />
        <Route component={NoMatchContainer} />
      </Switch>
    </AppContainer>
  </Router>
)

export default routes
