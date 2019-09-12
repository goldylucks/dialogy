import BootingMeta from './Booting.meta'
import RenderingMeta from './Rendering.meta'

const createMetas = dependencies => {
  const booting = new BootingMeta(dependencies)
  const rendering = new RenderingMeta(dependencies)
  return {
    booting,
    rendering,
  }
}

export default createMetas
