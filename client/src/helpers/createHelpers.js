import EndpointsHelper from './Endpoints.helper'
import ApiValidationsHelper from './ApiValidations.helper'

const createHelpers = dependencies => {
  const endpoints = new EndpointsHelper(dependencies)
  const apiValidations = new ApiValidationsHelper(dependencies)
  return {
    endpoints,
    apiValidations,
  }
}

export default createHelpers
