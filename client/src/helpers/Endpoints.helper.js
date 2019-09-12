import ShlakyEndpointsHelper from '../shlakyjs/Endpoints.helper'

class EndpointsHelper extends ShlakyEndpointsHelper {
  auth = {
    login: () => '/users',
  }
}

export default EndpointsHelper
