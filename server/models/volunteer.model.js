import { Schema, model } from 'mongoose'  
import slugify from 'slugify'

const volunteerSchema = new Schema({
  fullname: {
    type: String,
    required: [true, 'A volunteer must have a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'A volunteer must have a email'],
    unique: true
  },
  slug: String,
  number: {
    type: Number,
    required: [true, 'A volunteer must have a phone number'],
    maxlength: [10, "A number must be 10 digit."],
    unique: true
  },
  address: {
    type: String,
    required: [true, 'A volunteer must add their address']
  },
  country: {
    type: String,
    required: [true, 'A volunteer must add their country']
  },
  state: {
    type: String,
    required: [true, 'A volunteer must add their state']
  },
  city: {
    type: String,
    required: [true, 'A volunteer must add their city']
  },
  pincode: {
    type: Number,
    required: [true, 'A volunteer must add their pin code'],
    maxlength: [6, "A pin code must be 6 digits"]
  },
  message: {
    type: String,
    required: [true, 'A volunteer must leave a message'],
    trim: true
  },
  donated: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date()
  }
}) 

volunteerSchema.pre('save', function(next) {
  this.slug = slugify(this.fullname, { lower: true })
  next()
})

export default model('Volunteer', volunteerSchema)
