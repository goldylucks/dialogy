import axios from 'axios'

import './bootstrap'

import config from './config/config'
import createUtils from './utils/createUtils'
import createHelpers from './helpers/createHelpers'
import createManagers from './managers/createManagers'
import createServices from './services/createServices'
import createStores from './stores/createStores'
import createFacade from './facade/createFacade'
import createMetas from './meta/createMetas'

const utils = createUtils({ config })
const helpers = createHelpers({ config, utils })
const managers = createManagers({ config, utils, helpers, axios })
const services = createServices({ config, utils, helpers, managers })
const stores = createStores({ config, utils, helpers, managers, services })
const facade = createFacade({
  config,
  utils,
  helpers,
  managers,
  services,
  stores,
})
const metas = createMetas({
  config,
  utils,
  helpers,
  managers,
  services,
  stores,
  facade,
})

global.console.debug('[Facade]', facade)

metas.booting.boot().then(metas.rendering.render)

if (utils.env.isDev()) {
  global.facade = facade
}

if (module.hot) {
  module.hot.accept()
}
