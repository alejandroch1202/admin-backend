import { Router } from 'express'
import type { Express } from 'express'
import users from './users'
import cattle from './cattle'
import expenses from './expenses'

const router = (app: Express) => {
  const router = Router()

  app.use('/api/v1', router)

  router.use('/users', users)

  router.use('/cattle', cattle)

  router.use('/expenses', expenses)
}

export default router
