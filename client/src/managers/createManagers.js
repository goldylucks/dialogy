import ApiManager from './Api.manager'
import LocalStorageManager from './LocalStorage.manager'
import CacheManager from './Cache.manager'

const createManagers = dependencies => {
  const api = new ApiManager(dependencies)
  const localStorage = new LocalStorageManager(dependencies)
  const cache = new CacheManager(dependencies)
  return {
    api,
    localStorage,
    cache,
  }
}

export default createManagers
