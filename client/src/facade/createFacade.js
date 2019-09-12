import Facade from './Facade'

const createFacade = dependencies => {
  const facade = new Facade(dependencies)
  return facade
}

export default createFacade
