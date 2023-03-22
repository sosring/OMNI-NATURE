import { model, Schema } from 'mongoose';
import slugify from 'slugify';

const gallerySchema = new Schema({
  title: {
    type: String,
    required: [true, "A gallery must have a title"],
    unique: true
  },
  slug: String,
  images: {
    type: [String],
    required: [true, "A gallery must have a images"]
  }
});
gallerySchema.pre("save", function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});
const GalleryModel = model("Gallery", gallerySchema);

export { GalleryModel as G };
//# sourceMappingURL=gallery.model.mjs.map
