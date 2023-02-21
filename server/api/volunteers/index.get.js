import VoluteerModel from '~/server/models/volunteer.model'

export default defineEventHandler ( async (event) => {
  try {
    const getQuery = getQuery(event)

    const queryObj = {...getQuery}
    const excludedFields = ['name', 'page', 'fields', 'limit', 'sort']
    excludedFields.forEach(el => delete queryObj[el])

    // Advance filtering
    let queryStr = JSON.stringify(queryObj) 
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    let query = VoluteerModel.find(JSON.parse(queryStr))

    // Sorting
    if(getQuery.sort) {
      const sortBy = getQuery.sort.split(',').join(' ')
      query = query.sort(sortBy)  
    }

    // Field limiting
    if(getQuery.fields) {
      const fields = getQuery.fields.split(',').join(' ')
      query = query.select(fields)
    }
 
    // Pagination
    const page = getQuery.page || 1
    const limit = getQuery.limit || 0
    const skip = (page - 1) * limit

    query = query.skip(skip).limit(limit)
   
    return await query 
  }
  catch (err) {
    return err.message
  }
})
