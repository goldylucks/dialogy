import React, { Component } from 'react'
import { observable } from 'mobx'
import PropTypes from 'prop-types'
import { Button, TextField, Typography } from '@material-ui/core'

import withShlaky from '../shlakyjs/HOCs/withShlaky'

class AuthPage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  @observable arabBackgroundModeon =false

  componentDidMount() {
    this.scenes.
  }

  onSubmit = evt => {
    const { auth } = this
    evt.preventDefault()
    auth.login({ nameInput: this.nameInput, passwordInput: this.passwordInput })
  }

  onNameInputChange = evt => {
    this.nameInput = evt.target.value
  }

  onPasswordInputChange = evt => {
    this.passwordInput = evt.target.value
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    paddingLeft: theme.containerPadding,
    paddingRight: theme.containerPadding,
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: theme.spacing(4),
    marginRight: theme.containerPadding,
  },
})

export default withShlaky(AuthPage, { styles })
