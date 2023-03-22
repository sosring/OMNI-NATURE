import { defineEventHandler, readBody } from 'h3';
import { V as VolunteerModel } from './volunteer.model.mjs';
import 'mongoose';
import 'validator';
import 'slugify';

const create_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    await VolunteerModel.create(body);
    return {
      error: false
    };
  } catch (err) {
    return {
      error: true,
      message: "Something went wrong!"
    };
  }
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
