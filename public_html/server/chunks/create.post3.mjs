import { defineEventHandler, readBody } from 'h3';
import { D as DonerModel } from './doner.model.mjs';
import 'mongoose';
import 'validator';
import 'slugify';

const create_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    await DonerModel.create(body);
    return {
      error: false
    };
  } catch (err) {
    return {
      error: true,
      message: err.message
    };
  }
});

export { create_post as default };
//# sourceMappingURL=create.post3.mjs.map
