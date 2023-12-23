import { Schema, model } from 'mongoose'

const cowSchema = new Schema(
  {
    date: {
      type: Date,
      required: true
    },
    code: {
      type: String,
      unique: true,
      required: true
    },
    initialWeight: {
      type: Number,
      required: true
    },
    purchasePrice: {
      type: Number,
      required: true
    },
    currentWeight: {
      type: Number,
      required: true
    },
    sellDate: {
      type: Date,
      default: null
    },
    sellWeight: {
      type: Number,
      default: null
    },
    sellPrice: {
      type: Number,
      default: null
    }
  },
  {
    timestamps: true
  }
)

export default model('Cow', cowSchema)
