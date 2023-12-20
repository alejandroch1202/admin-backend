import { Schema, model } from 'mongoose'

const cowSchema = new Schema(
  {
    identifier: {
      type: String,
      unique: true,
      required: true
    },
    purchaseDate: {
      type: Date,
      required: true
    },
    purchaseWeight: {
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
