import Meta from '../shlakyjs/Meta'

class BootingMeta extends Meta {
  boot() {
    const user = this.stores.currentUser.hydrateUserFromLocalStorage()
    if (user) {
      this.managers.api.setCurrentUser(user)
      this.handleRedirectUser()
    } else {
      this.handleRedirectGuest()
    }
    global.console.debug('Boot successful')
    // boot happened successfully
    return Promise.resolve(true)
  }

  handleRedirectUser = () => {
    if (this.services.routing.is.auth()) {
      this.services.routing.to.home()
    }
  }

  handleRedirectGuest = () => {
    this.services.routing.to.auth()
  }
}

export default BootingMeta
