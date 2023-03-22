import { defineEventHandler, readBody } from 'h3';
import { C as CampaignModel } from './campaign.model.mjs';
import 'mongoose';
import 'slugify';

const create_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    return await CampaignModel.create(body);
  } catch (err) {
    return err.message;
  }
});

export { create_post as default };
//# sourceMappingURL=create.post4.mjs.map
