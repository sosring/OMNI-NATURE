import DonerModel from '~/server/models/doner.model'

export default defineEventHandler ( async (event) => {
  try {
    const body = await readBody(event)

    await DonerModel.create(body)

    return {
      error: false
    } 
  }
  catch (err) {
    console.log(err)
    return {
      error: true,
      message: err.message
    }
  }
})
