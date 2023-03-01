import { Schema, model } from 'mongoose'

const campaignSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A campaign must have a title'],
    unique: true,
    trim: true
  },
  thumbnail: {
    type: String,
    required: [true, 'A campaign must have a thumbnail'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'A campaign must have a description'],
    trim: true,
  }
}) 

export default model('Campaign', campaignSchema)
