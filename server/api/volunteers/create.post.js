import VoluteerModel from '~/server/models/volunteer.model'

export default defineEventHandler ( async (event) => {
  try {
    const body = await readBody(event)

    return await VoluteerModel.create(body)
  }
  catch (err) {
    console.log(err.message)
    return err.message
  }
})
