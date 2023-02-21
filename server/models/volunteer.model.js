import { Schema, model } from 'mongoose'  

const volunteerSchema = new Schema({
  fullname: {
    type: String,
    required: [true, 'A volunteer must have a name']
  },
  email: {
    type: String,
    required: [true, 'A volunteer must have a email']
  },
  phone: {
    type: Number,
    required: [true, 'A volunteer must have a phone number']
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
  Pin: {
    type: Number,
    required: [true, 'A volunteer must add their pin code']
  },
  message: {
    type: String,
    required: [true, 'A volunteer must leave a message']
  },
  donated: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    enum: {
      values: [1500, 2500, 5000]
    }
  },
  donationPlan: {
    type: String,
    enum: {
      values: ['onetime', 'weekly', 'monthly', 'yearly']
    }
  },
  donationNote: {
    type: String
  }
}) 

export default model('Volunteer', volunteerSchema)
