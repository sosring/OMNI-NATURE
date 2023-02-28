import GalleryModel from '~/server/models/gallery.model'  

export default defineEventHandler ( async (event) => {
  try {
    const body = await readBody(event)

   return await GalleryModel.create(body)
  }
  catch (err) {
    return err.message
  }
})
