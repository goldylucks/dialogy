/* eslint-disable no-underscore-dangle */
import { extendObservable } from 'mobx'

import Store from './Store'

class StateStore extends Store {
  constructor(dependencies) {
    super(dependencies)
    this.setup()
  }

  setup() {
    const { fields } = this.config.states[this._name]
    fields.forEach(this.setupField)
  }

  setupField = ({ name, initial }) => {
    extendObservable(this, {
      [name]: initial,
    })
  }

  getField(name) {
    return this[name]
  }

  setField({ name, value }) {
    this[name] = value
  }

  fieldIs({ name, value }) {
    return this[name] === value
  }
}

export default StateStore
