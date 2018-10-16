import * as React from 'react'
import {
  Route,
  Switch,
  // BrowserRouter as Router,
  HashRouter as Router,
} from 'react-router-dom'
import AppContainer from 'containers/AppContainer'
import loadableComponent from './loadableComponent'

const CounterContainer = () => import('containers/CounterContainer')
const HomeContainer = () => import('containers/HomeContainer')
const NoMatchContainer = () => import('containers/NoMatchContainer')
const FormContainer = () => import('containers/SimpleFormContainer')

const routes = (
  <Router>
    <AppContainer>
      <Switch>
        <Route exact path="/" component={loadableComponent(HomeContainer)} />
        <Route path='/counter' component={loadableComponent(CounterContainer)} />
        <Route path='/form' component={loadableComponent(FormContainer)} />
        <Route component={loadableComponent(NoMatchContainer)} />
      </Switch>
    </AppContainer>
  </Router>
)

export default routes
