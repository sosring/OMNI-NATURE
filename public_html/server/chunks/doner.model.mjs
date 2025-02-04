import { model, Schema } from 'mongoose';
import validator from 'validator';
import slugify from 'slugify';

const donerSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Please tell us your name!"],
    trim: true
  },
  slug: String,
  email: {
    type: String,
    lowercase: true,
    required: [true, "Please provide your email"],
    validate: [validator.isEmail, "Please provide a valid email!"]
  },
  number: {
    type: Number,
    required: [true, "Please provide your number"],
    maxlength: [10, "A number must be 10 digit."]
  },
  address: {
    type: String,
    required: [true, "Please provide your number"]
  },
  country: {
    type: String,
    required: [true, "Please provide your country"]
  },
  state: {
    type: String,
    required: [true, "Please provide your state"]
  },
  city: {
    type: String,
    required: [true, "Please provide your cty"]
  },
  pincode: {
    type: Number,
    required: [true, "Please provide your pincode"],
    maxlength: [6, "A pin code must be 6 digits"]
  },
  message: {
    type: String,
    required: [true, "Please leave a message"],
    trim: true
  },
  donated: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    enum: {
      values: [5e3, 1e4, 2e4, 5e4]
    },
    required: [true, "Please add an amount"]
  },
  date: {
    type: Date,
    default: Date()
  }
});
donerSchema.pre("save", function(next) {
  this.slug = slugify(this.fullname, { lower: true });
  next();
});
const DonerModel = model("Doner", donerSchema);

export { DonerModel as D };
//# sourceMappingURL=doner.model.mjs.map
