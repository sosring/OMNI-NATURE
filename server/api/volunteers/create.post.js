import VoluteerModel from '~/server/models/volunteer.model'

export default defineEventHandler ( async (event) => {
  const body = await readBody(event)
  console.log(body)

  return await VoluteerModel.create(body)
})
