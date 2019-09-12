import capitalize from 'lodash/capitalize'

import Manager from './Manager'

class LocalStorageManager extends Manager {
  constructor(dependencies) {
    super(dependencies)
    this.setup()
  }

  setup() {
    this.config.localStorageKeys.forEach(this.setupKey)
  }

  setupKey = key => {
    this[`set${capitalize(key)}`] = data => this.set(key, data)
    this[`get${capitalize(key)}`] = () => this.get(key)
    this[`remove${capitalize(key)}`] = () => this.reset(key)
  }

  set(key, value) {
    this.debug(`Setting ${key}`, value)
    return localStorage.setItem(key, JSON.stringify(value))
  }

  get(key) {
    const unparsed = localStorage.getItem(key)
    try {
      const parsed = JSON.parse(unparsed)
      this.debug(`Got ${key}`, parsed)
      return parsed
    } catch (err) {
      this.reportError(`Parsing ${key}`, unparsed)
    }
  }

  reset(key) {
    this.debug(`Removing ${key}`)
    localStorage.removeItem(key)
  }

  debug = (...args) => global.console.debug('[Local storage]', ...args)

  reportError = (...args) =>
    global.console.error('[Local storage] Error', ...args)
}

export default LocalStorageManager
