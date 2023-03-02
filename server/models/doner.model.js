import { Schema, model } from 'mongoose'  
import slugify from 'slugify'

const donerSchema = new Schema({
  fullname: {
    type: String,
    required: [true, 'A doner must have a name'],
    trim: true
  },
  slug: String,
  email: {
    type: String,
    required: [true, 'A doner must have a email']
  },
  number: {
    type: Number,
    required: [true, 'A doner must have a phone number'],
    maxlength: [10, "A number must be 10 digit."]
  },
  address: {
    type: String,
    required: [true, 'A doner must add their address']
  },
  country: {
    type: String,
    required: [true, 'A doner must add their country']
  },
  state: {
    type: String,
    required: [true, 'A doner must add their state']
  },
  city: {
    type: String,
    required: [true, 'A doner must add their city']
  },
  pincode: {
    type: Number,
    required: [true, 'A Doner must add their pin code'],
    maxlength: [6, "A pin code must be 6 digits"]
  },
  message: {
    type: String,
    required: [true, 'A Doner must leave a message'],
    trim: true
  },
  donated: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    enum: {
      values: [5000, 10000, 20000, 50000]
    },
    required: [true, 'Please add an amount'],
  },
  date: {
    type: Date,
    default: Date()
  }
}) 

donerSchema.pre('save', function(next) {
  this.slug = slugify(this.fullname, { lower: true })
  next()
})

export default model('Doner', donerSchema)
