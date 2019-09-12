import { hot } from 'react-hot-loader/root'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Router } from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'

import ErrorFallbackComponent from './components/ErrorFallbackComponent'
import ThemeProvider from './ThemeProvider'
import Routes from './Routes'
import './App.css'

@inject('facade')
@observer
class App extends Component {
  static propTypes = {
    facade: PropTypes.object.isRequired,
  }

  render() {
    const { facade } = this.props
    return (
      <ThemeProvider>
        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
          <Router history={facade.utils.history}>
            <Routes />
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    )
  }
}

export default hot(App)
