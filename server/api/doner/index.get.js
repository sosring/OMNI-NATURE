import DonerModel from '~/server/models/doner.model'
import ApiFeature from '~/server/utils/ApiFeature'

export default defineEventHandler ( async (event) => {
  try {
    const features = new ApiFeature(DonerModel.find(), getQuery(event))
    features.filter().sort().limitFields().pagination()

    return await features.query
  }
  catch (err) {
    return err
  }
})
