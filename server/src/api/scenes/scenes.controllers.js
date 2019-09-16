import { Scenes } from './scenes.model'

const getMany = async (req, res) => {
  try {
    const scenes = await Scenes.find()
    res.status(200).json({ scenes })
  } catch (error) {
    console.error('[Scenes.getMany] error', error)
    res.status(400).send({ message: 'שגיאה בטעינת הסצנות' })
  }
}

const getOne = async (req, res) => {
  try {
    const scene = await Scenes.findById(req.params.id)
    res.status(200).json({ scene })
  } catch (error) {
    console.error(`[Scenes.getOne ${req.params.id}] error`, error)
    res.status(400).send({ message: 'שגיאה בטעינת הסצנות' })
  }
}

export default { getMany, getOne }
