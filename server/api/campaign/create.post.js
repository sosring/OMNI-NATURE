import CampaignModel from '~/server/models/campaign.model'  

export default defineEventHandler ( async (event) => {
  try {
    const body = await readBody(event)

    return await CampaignModel.create(body)
  }
  catch (err) {
    return err.message
  }
})
