import React from 'react'
import { IndexRoute } from 'react-router';
import { Route } from 'react-router-dom'

import counterContainer from '../containers/counterContainer'

const routes = (
    <Route path="/" component={counterContainer}>
       <IndexRoute component={counterContainer} />
    </Route>
  )

export default routes

