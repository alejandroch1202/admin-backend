import { Schema, model } from 'mongoose'

const expenseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})

export default model('Expenses', expenseSchema)
