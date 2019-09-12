import ShlakyResourceService from '../shlakyjs/Resource.service'

class ResourceService extends ShlakyResourceService {
  auth = {
    login: (...args) => this.managers.api.auth.login(...args),
  }
}

export default ResourceService
