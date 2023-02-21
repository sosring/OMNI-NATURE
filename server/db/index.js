import mongoose from 'mongoose'

export default  async (_nitroApp: Nitro) => {
  const { DB_URI } = useRuntimeConfig()

  mongoose.connect(DB_URI)
    .then(() => console.log('DB CONNNECTED'))
    .catch(err => console.log(err.message))
}
