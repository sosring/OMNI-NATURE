import { defineEventHandler, getQuery } from 'h3';
import { C as CampaignModel } from './campaign.model.mjs';
import { A as ApiFeature } from './ApiFeature.mjs';
import 'mongoose';
import 'slugify';

const index_get = defineEventHandler(async (event) => {
  try {
    const features = new ApiFeature(CampaignModel.find(), getQuery(event));
    features.pagination();
    return await features.query;
  } catch (err) {
    return err;
  }
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
