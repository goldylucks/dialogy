import { Router } from 'express'

import auth from './auth/auth.router'
import users from './users/users.router'
import scenes from './scenes/scenes.router'

const router = Router()

router.use('/auth', auth)
router.use('/users', users)
router.use('/scenes', scenes)

export default router
