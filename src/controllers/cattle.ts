import type { Request, Response, NextFunction } from 'express'
import { cattle } from './../db/dummy'

const create = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ ok: true, data: cattle })
}

const list = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ ok: true, data: cattle })
}

const find = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const cow = cattle.find((cow) => cow.id === Number(id))

  if (cow === undefined) {
    return res.status(404).json({ ok: false, data: 'Cow not found' })
  }

  return res.status(200).json({ ok: true, data: cow })
}

export { create, list, find }
