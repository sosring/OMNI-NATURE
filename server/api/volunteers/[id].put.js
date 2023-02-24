import VoluteerModel from '~/server/models/volunteer.model'

export default defineEventHandler ( async (event) => {
  try {
    const body = await readBody(event)
    const id = event.context.params.id  

    return await VoluteerModel.findByIdAndUpdate(id, body)
  }
  catch (err) {
    return await err.message
  }
})
