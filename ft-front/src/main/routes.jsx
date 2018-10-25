import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import AuthOrApp from './authOrApp'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)
