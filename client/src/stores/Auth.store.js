import { Store } from '../shlakyjs'

class AuthStore extends Store {
  static __name = 'auth'

  async login({ nameInput, passwordInput }) {
    const { data, errorMessage } = await this.services.resource.auth.login({
      nameInput,
      passwordInput,
    })
    if (errorMessage) {
      throw new Error(errorMessage)
    }
    return data
  }
}

export default AuthStore
