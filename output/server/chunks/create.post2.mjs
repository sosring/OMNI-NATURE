import { defineEventHandler, readBody } from 'h3';
import { G as GalleryModel } from './gallery.model.mjs';
import 'mongoose';
import 'slugify';

const create_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    return await GalleryModel.create(body);
  } catch (err) {
    return err.message;
  }
});

export { create_post as default };
//# sourceMappingURL=create.post2.mjs.map
