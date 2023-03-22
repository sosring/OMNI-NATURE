import { defineEventHandler, readBody } from 'h3';
import { V as VolunteerModel } from './volunteer.model.mjs';
import 'mongoose';
import 'validator';
import 'slugify';

const _id__put = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const id = event.context.params.id;
    return await VolunteerModel.findByIdAndUpdate(id, body);
  } catch (err) {
    return await err;
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
