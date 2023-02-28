import GalleryModel from '~/server/models/gallery.model'  
import ApiFeature from '~/server/utils/ApiFeature'

export default defineEventHandler (async (event) => {
  try {
    const id = event.context.params.id

    return await GalleryModel.findById(id)
  }
  catch (err) {
    return err.message
  }
})
