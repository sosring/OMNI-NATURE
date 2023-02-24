import VoluteerModel from '~/server/models/volunteer.model'

export default defineEventHandler ( async (event) => {
  try {
    const query = getQuery(event)

    const queryObj = {...query}
    const excludedFields = ['name', 'page', 'fields', 'limit', 'sort']
    excludedFields.forEach(el => delete queryObj[el])

    // Advance filtering
    let queryStr = JSON.stringify(queryObj) 
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    let request = VoluteerModel.find(JSON.parse(queryStr))

    // Sorting
    if(query.sort) {
      const sortBy = query.sort.split(',').join(' ')
      request = request.sort(sortBy)  
    }

    // Field limiting
    if(query.fields) {
      const fields = query.fields.split(',').join(' ')
      request = request.select(fields)
    }
 
    // Pagination
    const page = query.page || 1
    const limit = query.limit || 0
    const skip = (page - 1) * limit

    request = request.skip(skip).limit(limit)
   
    return await request 
  }
  catch (err) {
    return err.message
  }
})
