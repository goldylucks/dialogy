import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const SPACING = 8

const theme = createMuiTheme({
  direction: 'rtl',
  spacing: SPACING,
  typography: {
    useNextVariants: true,
    fontFamily: '"Alef"',
    h1: {
      fontSize: 22,
      letterSpacing: 0,
    },
    h2: {
      fontSize: 19,
    },
  },
  bottomBarHeight: SPACING * 8,
  containerPadding: SPACING * 2,
})

class ThemeProvider extends Component {
  render() {
    return <MuiThemeProvider theme={theme} {...this.props} />
  }
}

export default ThemeProvider

global.console.debug('[Theme]', theme)
