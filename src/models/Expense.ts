import { Schema, model } from 'mongoose'

const expenseSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    category: {
      type: String,
      trim: true,
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
