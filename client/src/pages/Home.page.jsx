import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withShlaky from '../shlakyjs/HOCs/withShlaky'

class HomePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props
    return <div className={classes.root}>Home page</div>
  }
}

const styles = theme => ({
  root: {},
})

export default withShlaky(HomePage, { styles })
