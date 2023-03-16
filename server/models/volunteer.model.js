import { Schema, model } from 'mongoose'  
import validator from 'validator'
import slugify from 'slugify'

const volunteerSchema = new Schema({
  fullname: {
    type: String,
    required: [true, 'Please tell us your name!'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    validate: [validator.isEmail, 'Please provide a valid email!'],
    lowercase: true,
    unique: true
  },
  slug: String,
  number: {
    type: Number,
    required: [true, 'Please provide your number'],
    maxlength: [10, "A number must be 10 digit."],
    unique: true
  },
  address: {
    type: String,
    required: [true, 'Please provide your number']
  },
  country: {
    type: String,
    required: [true, 'Please provide your country']
  },
  state: {
    type: String,
    required: [true, 'Please provide your state']
  },
  city: {
    type: String,
    required: [true, 'Please provide your cty']
  },
  pincode: {
    type: Number,
    required: [true, 'Please provide your pincode'],
    maxlength: [6, "A pin code must be 6 digits"]
  },
  message: {
    type: String,
    required: [true, 'Please leave a message'],
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
