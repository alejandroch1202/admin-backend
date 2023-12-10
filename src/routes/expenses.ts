import { Router } from 'express'
import { create, list, find } from './../controllers/expenses'

const router = Router()

router.post('/', create)

router.get('/', list)

router.get('/:id', find)

export default router