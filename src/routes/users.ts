import { Router } from 'express'
import { create, list } from './../controllers/users'

const router = Router()

router.post('/', create)

router.get('/', list)

export default router
