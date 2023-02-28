import { Schema, model } from 'mongoose'

const gallerySchema = new Schema({
  title: {
    type: String,
    required: [true, 'A gallery must have a title'],
    unique: true
  },
  images: {
    type: [String],
    required: [true, 'A gallery must have a images']
  }
})

export default model('Gallery', gallerySchema)
