import CampaignModel from '~/server/models/campaign.model'  
import ApiFeature from '~/server/utils/ApiFeature'

export default defineEventHandler (async (event) => {
  try {
    const id = event.context.params.id

    return await CampaignModel.findById(id)
  }
  catch (err) {
    return err
  }
})
