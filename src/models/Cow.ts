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
  purchaseWeight: {
    type: Number,
    required: true
  },
  purchasePrice: {
    type: Number,
    required: true
  }
})

export default model('Cow', cowSchema)
