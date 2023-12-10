import { Schema, model } from 'mongoose'

const cowSchema = new Schema({
  identifier: {
    type: Number,
    unique: true,
    required: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  },
  purchase_weight: {
    type: Number,
    required: true
  },
  purchase_price: {
    type: Number,
    required: true
  }
})

export default model('Cow', cowSchema)
