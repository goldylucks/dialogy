import AuthStore from './Auth.store'
import CurrentUserStore from './CurrentUser.store'

const createStores = dependencies => {
  const auth = new AuthStore(dependencies)
  const currentUser = new CurrentUserStore(dependencies)
  return {
    auth,
    currentUser,
  }
}

export default createStores
