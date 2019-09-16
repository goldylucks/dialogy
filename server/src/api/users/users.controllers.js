import { Users } from './users.model'

export const getOne = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id)
    res.status(200).json({ user })
  } catch (error) {
    console.error('[users.getOne] error', error)
    res.status(400).send({ message: 'שגיאה במציאת המשתמש' })
  }
}

export const getMany = async (req, res) => {
  try {
    const users = await Users.find()
    res.status(200).json({ users })
  } catch (error) {
    console.error('[users.getMany] error', error)
    res.status(400).send({ message: 'error!' })
  }
}

export const reset = async (req, res) => {
  const nextUsers = req.body.data.map(mapUser)
  try {
    await Users.deleteMany({})
    console.log('[reset] All users deleted')
    await Users.insertMany(nextUsers)
    console.log('[reset] New users inserted')
    res.status(201).json({ message: 'success!' })
  } catch (error) {
    console.error('[reset] error', error.message)
  }
}

function mapUser({ name, password }) {
  return {
    name,
    password
  }
}
