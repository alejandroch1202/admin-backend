import type { Request, Response, NextFunction } from 'express'
import { expenses } from '../db/dummy'

const create = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ ok: true, data: expenses })
}

const list = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ ok: true, data: expenses })
}

const find = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const expense = expenses.find((expense) => expense.id === Number(id))

  if (expense === undefined) {
    return res.status(404).json({ ok: false, data: 'Expense not found' })
  }

  return res.status(200).json({ ok: true, data: expense })
}

export { create, list, find }
