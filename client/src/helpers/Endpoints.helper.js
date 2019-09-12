import ShlakyEndpointsHelper from '../shlakyjs/Endpoints.helper'

class EndpointsHelper extends ShlakyEndpointsHelper {
  auth = {
    login: () => '/auth/login',
  }
}

export default EndpointsHelper
