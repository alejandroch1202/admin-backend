import type { Request, Response, NextFunction } from 'express'
import Expense from './../models/Expense'

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const expense = new Expense(req.body)
    await expense.save()
    res.status(201).json({ ok: true, message: 'Expense created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const expenses = await Expense.find()
    res.status(200).json({ ok: true, data: expenses })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const expense = await Expense.findById(req.params.id)
    if (expense === null) {
      return res.status(404).json({ ok: false, message: 'Expense not found' })
    }
    res.status(200).json({ ok: true, data: expense })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const updatedExpense = await Expense.findByIdAndUpdate(id, changes)
    if (updatedExpense === null) {
      return res.status(404).json({ ok: false, message: 'Expense not found' })
    }
    res.status(200).json({ ok: true, message: 'Expense updated' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const updatedExpense = await Expense.findByIdAndDelete(id)
    if (updatedExpense === null) {
      return res.status(404).json({ ok: false, message: 'Expense not found' })
    }
    res.status(200).json({ ok: true, message: 'Expense deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

export { create, list, find, update, remove }
