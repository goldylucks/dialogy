import { observable, action } from 'mobx'

import constants from '../constants'
import shlakyFacade from '../shlakyjs/Facade'

class Facade extends shlakyFacade {
  constants = constants

  constructor(dependencies) {
    super(dependencies)
    this.setup()
  }

  @observable
  auth = {
    login: action(({ nameInput, passwordInput }) => {
      this.stores.auth
        .login({ nameInput, passwordInput })
        .then(data => data.user)
        .then(this.managers.api.setCurrentUser)
        .then(this.stores.currentUser.set)
        .then(this.services.routing.to.scenesList)
        .catch(err => {
          console.error(err)
          this.auth.loginError = err.message
        })
    }),
  }

  /*
   * helpers
   */
}

export default Facade
