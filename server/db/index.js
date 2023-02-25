import mongoose from 'mongoose'

const { DB_URI } = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(DB_URI);
    console.log("DB connection established.");
  } catch (err) {
    console.log("DB connection failed.", err);
  }
})
