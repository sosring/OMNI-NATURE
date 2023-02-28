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
  summary: {
    type: String,
    required: [true, 'A campaign must have a summary'],
    maxlength: [300, 'A summary must be less or equal 300 letters'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'A campaign must have a description'],
    trim: true,
  }
}) 

export default model('Campaign', campaignSchema)
