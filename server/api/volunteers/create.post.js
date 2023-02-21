import VoluteerModel from '~/server/models/volunteer.model'

export default defineEventHandler ( async (event) => {
  const body = await readBody(event)

  return await VoluteerModel.create(body)
}
