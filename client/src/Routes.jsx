import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home.page'
import AuthPage from './pages/Auth.page'
import withShlaky from './shlakyjs/HOCs/withShlaky'

class Routes extends Component {
  render() {
    const { facade } = this
    return (
      <Switch>
        <Route path={facade.routing.get.home()} exact component={HomePage} />
        <Route path={facade.routing.get.auth()} exact component={AuthPage} />
      </Switch>
    )
  }
}

export default withShlaky(Routes)
