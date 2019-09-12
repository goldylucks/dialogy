import ResourceService from './Resource.service'
import RoutingService from './Routing.service'

const createServices = dependencies => {
  const resource = new ResourceService(dependencies)
  const routing = new RoutingService(dependencies)
  return {
    resource,
    routing,
  }
}

export default createServices
