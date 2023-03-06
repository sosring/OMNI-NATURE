import CampaignModel from '~/server/models/campaign.model'  
import ApiFeature from '~/server/utils/ApiFeature'

export default defineEventHandler (async (event) => {
  try {
    const features = new ApiFeature(CampaignModel.find(), getQuery(event))
    features.pagination()

    return await features.query
  }
  catch (err) {
    return err
  }
})
