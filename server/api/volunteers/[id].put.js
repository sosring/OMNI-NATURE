import VoluteerModel from '~/server/models/volunteer.model'

export default defineEventHandler ( async (event) => {
  const body = await readBody(event)
  const id = event.context.params.id  

  return await VoluteerModel.findByIdAndUpdate(id, body)
}
