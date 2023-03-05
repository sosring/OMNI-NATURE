import VolunteerModel from '~/server/models/volunteer.model'

export default defineEventHandler ( async (event) => {
  try {
    const body = await readBody(event)

    await VolunteerModel.create(body)

    return {
      error: false
    } 
  }
  catch (err) {
    } else {
      return {
        error: true,
        message: 'Something went wrong!'
      }
    }
})
