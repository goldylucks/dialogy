import ShlakyApiManager from '../shlakyjs/Api.manager'

class ApiManager extends ShlakyApiManager {
  auth = {
    login: ({ nameInput, passwordInput }) => {
      const path = this.helpers.endpoints.auth.login()
      const url = this.buildUrl(path)
      return this.post(url, { name: nameInput, password: passwordInput })
    },
  }
}

export default ApiManager
