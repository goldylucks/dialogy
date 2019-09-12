// AdGo [01/07/19] - adding this to app.jsx crashes the app :/
// taken from https://material-ui.com/guides/right-to-left/#3-jss-rtl

import React from 'react'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { StylesProvider, jssPreset } from '@material-ui/styles'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function RtlProvider(props) {
  return <StylesProvider jss={jss} {...props} />
}

export default RtlProvider
