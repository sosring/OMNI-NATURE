import { defineEventHandler } from 'h3';
import { G as GalleryModel } from './gallery.model.mjs';
import 'mongoose';
import 'slugify';

const _id__get = defineEventHandler(async (event) => {
  try {
    const id = event.context.params.id;
    return await GalleryModel.findById(id);
  } catch (err) {
    return err;
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
