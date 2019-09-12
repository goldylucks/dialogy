import { Users } from './users.model'

export const getOne = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id)
    res.status(200).json({ data: user })
  } catch (error) {
    console.error('[users.getOne] error', error)
    res.status(400).send({ message: 'שגיאה במציאת המשתמש' })
  }
}
