import { model, Schema } from 'mongoose';
import slugify from 'slugify';

const campaignSchema = new Schema({
  title: {
    type: String,
    required: [true, "A campaign must have a title"],
    unique: true,
    trim: true
  },
  slug: String,
  thumbnail: {
    type: String,
    required: [true, "A campaign must have a thumbnail"],
    unique: true
  },
  description: {
    type: String,
    required: [true, "A campaign must have a description"],
    trim: true
  }
});
campaignSchema.pre("save", function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});
const CampaignModel = model("Campaign", campaignSchema);

export { CampaignModel as C };
//# sourceMappingURL=campaign.model.mjs.map
