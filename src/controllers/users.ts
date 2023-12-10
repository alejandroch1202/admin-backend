import type { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcryptjs'
import User from './../models/User'

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = new User(req.body)
    user.password = bcrypt.hashSync(user.password, 10)
    await user.save()
    res.status(201).json({ ok: true, message: 'User created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find()
    res.status(200).json({ ok: true, data: users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: 'Server error' })
    next()
  }
}

export { create, list }
