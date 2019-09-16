import { Router } from 'express'
import { getOne, getMany, reset } from './users.controllers'

const router = Router()

router.get('/', getMany)

router.get('/:id', getOne)


router.post('/reset', reset)

export default router

