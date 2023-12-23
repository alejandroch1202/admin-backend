import { Router } from 'express'
import {
  create,
  list,
  find,
  update,
  remove,
  createCategory,
  listCategories
} from './../controllers/expenses'

const router = Router()

router.post('/categories', createCategory)

router.get('/categories', listCategories)

router.post('/', create)

router.get('/', list)

router.get('/:id', find)

router.put('/:id', update)

router.delete('/:id', remove)

export default router
