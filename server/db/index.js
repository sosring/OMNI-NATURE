import mongoose from 'mongoose'

const { DB_URI } = useRuntimeConfig()

export default async () => {
  try {
    console.log(DB_URI)
    await mongoose.connect(config.mongoUrl);
    console.log("DB connection established.");
  } catch (err) {
    console.error.error("DB connection failed.", err);
  }
};
