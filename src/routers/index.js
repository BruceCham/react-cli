import React,{Component} from 'react'
import { IndexRoute } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  Redirect
} from 'react-router-dom'

import counterContainer from '../containers/counterContainer'


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={counterContainer}>
    </Route>
  </Router>
  )

export default routes

