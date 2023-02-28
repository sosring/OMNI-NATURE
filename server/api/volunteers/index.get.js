import VolunteerModel from '~/server/models/volunteer.model'
import ApiFeature from '~/server/utils/ApiFeature'

export default defineEventHandler ( async (event) => {
  try {
    const features = new ApiFeature(VolunteerModel.find(), getQuery(event))
    features.filter().sort().limitFields().pagination()

    return await features.query
  }
  catch (err) {
    console.log(err)
    return err.message
  }
})
