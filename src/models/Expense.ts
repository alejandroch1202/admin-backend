import { Schema, model } from 'mongoose'

const expenseSchema = new Schema(
  {
    date: {
      type: Date,
      required: true
    },
    category: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default model('Expenses', expenseSchema)
