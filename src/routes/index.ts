import { Router } from 'express'
import type { Express } from 'express'
import users from './users'
import cows from './cows'
import expenses from './expenses'

const router = (app: Express) => {
  const router = Router()

  app.use('/api/v1', router)

  router.use('/users', users)

  router.use('/cows', cows)

  router.use('/expenses', expenses)
}

export default router
