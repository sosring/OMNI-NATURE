import VoluteerModel from '~/server/models/volunteer.model'

export default defineEventHandler ( async (event) => {
  try {
    const body = await readBody(event)

    await VoluteerModel.create(body)

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
