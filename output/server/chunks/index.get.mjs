import { defineEventHandler, getQuery } from 'h3';
import { V as VolunteerModel } from './volunteer.model.mjs';
import { A as ApiFeature } from './ApiFeature.mjs';
import 'mongoose';
import 'validator';
import 'slugify';

const index_get = defineEventHandler(async (event) => {
  try {
    const features = new ApiFeature(VolunteerModel.find(), getQuery(event));
    features.filter().sort().limitFields().pagination();
    return await features.query;
  } catch (err) {
    return err;
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
