import { defineEventHandler, getQuery } from 'h3';
import { G as GalleryModel } from './gallery.model.mjs';
import { A as ApiFeature } from './ApiFeature.mjs';
import 'mongoose';
import 'slugify';

const index_get = defineEventHandler(async (event) => {
  try {
    const features = new ApiFeature(GalleryModel.find(), getQuery(event));
    features.pagination();
    return await features.query;
  } catch (err) {
    return err;
  }
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
