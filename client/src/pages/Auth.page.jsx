/* eslint sort-keys: "error" */

import React, { Component } from 'react'
import { observable } from 'mobx'
import PropTypes from 'prop-types'
import { Button, TextField, Typography } from '@material-ui/core'

import withShlaky from '../shlakyjs/HOCs/withShlaky'

class AuthPage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  @observable nameInput = ''

  @observable passwordInput = ''

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
        <Typography variant="h1" className={classes.title}>
          הכנסו שם וססמא על מנת להתחבר
        </Typography>
        <form onSubmit={this.onSubmit}>
          <TextField
            id="nameInput"
            label="שם"
            className={classes.textField}
            onChange={this.onNameInputChange}
            value={this.nameInput}
            fullWidth
            margin="normal"
          />
          <TextField
            id="passwordInput"
            label="ססמא"
            className={classes.textField}
            onChange={this.onPasswordInputChange}
            value={this.passwordInput}
            fullWidth
            margin="normal"
          />
          <div>
            <Button color="primary" variant="contained" type="submit">
              התחבר
            </Button>
          </div>
        </form>
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
