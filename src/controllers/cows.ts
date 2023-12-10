import type { Request, Response, NextFunction } from 'express'
import Cow from '../models/Cow'

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cow = new Cow(req.body)
    await cow.save()
    res.status(201).json({ ok: true, message: 'Cow created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cows = await Cow.find({}, { _id: 0, __v: 0 })
    res.status(200).json({ ok: true, data: cows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cow = await Cow.findById(req.params.id)
    if (cow === null) {
      return res.status(404).json({ ok: false, message: 'Cow not found' })
    }
    res.status(200).json({ ok: true, cow })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

export { create, list, find }
