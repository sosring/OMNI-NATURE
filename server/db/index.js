import mongoose from 'mongoose'
import slugify from 'slugify'

const { DB_URI } = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    console.log(slugify)
    mongoose.set('strictQuery', false)
    await mongoose.connect(DB_URI);
    console.log("DB connection established.");
  } catch (err) {
    console.log("DB connection failed.", err);
  }
})
