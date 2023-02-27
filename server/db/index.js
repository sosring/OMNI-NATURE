import mongoose from 'mongoose'

const { DB_URI, DB_KEY } = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const uri = DB_URI.replace('<password>', DB_KEY);
    
    mongoose.set('strictQuery', false)
    await mongoose.connect(uri, { useNewUrlParser: true });
    console.log("DB connection established.");
  } catch (err) {
    console.log("DB connection failed.", err);
  }
})
