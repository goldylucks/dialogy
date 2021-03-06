import config from './config/config'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}

global.mockConfig = config
global.localStorage = localStorageMock

// silence debug statements
global.console.debug = () => {}
