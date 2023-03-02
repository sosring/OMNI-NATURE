import { Schema, model } from 'mongoose'
import slugify from 'slugify'

const gallerySchema = new Schema({
  title: {
    type: String,
    required: [true, 'A gallery must have a title'],
    unique: true
  },
  slug: String,
  images: {
    type: [String],
    required: [true, 'A gallery must have a images']
  }
})

gallerySchema.pre('save', function(next) {
  this.slug = slugify(this.fullname, { lower: true })
  next()
})

export default model('Gallery', gallerySchema)
