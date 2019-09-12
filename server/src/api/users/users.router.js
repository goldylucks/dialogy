import { Router } from 'express'
import { getOne } from './users.controllers'

const router = Router()

router.get('/:id', getOne)

export default router
