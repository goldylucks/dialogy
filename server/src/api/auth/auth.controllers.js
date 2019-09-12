import { Users } from '../users/users.model'
import { newToken } from '../../utils/auth'

const invalid = { message: 'שם או ססמא שגויים' }

const login = async (req, res) => {
  const { name, password } = req.body
  if (!name || !password) {
    return res.status(400).send({ message: 'נא להזין שם וססמא' })
  }

  try {
    const user = await Users.findOne({ name })
      .select('name password')
      .exec()

    if (!user) {
      return res.status(401).send(invalid)
    }

    const passwordMatches = await user.checkPassword(password)

    if (!passwordMatches) {
      return res.status(401).send(invalid)
    }

    const token = newToken(user)
    return res
      .status(201)
      .send({ data: { ...user.toObject, password: undefined, token } })
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }
}

export default { login }
