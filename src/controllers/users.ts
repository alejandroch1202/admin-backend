import type { Request, Response, NextFunction } from 'express'
import { users } from '../db/dummy'

const list = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ ok: true, data: users })
}

export { list }
