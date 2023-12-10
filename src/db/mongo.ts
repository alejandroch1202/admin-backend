import mongoose from 'mongoose'

const connect = async () => {
  const url = process.env.MONGODB_URL

  if (url === undefined) {
    throw new Error('[db] MONGODB_URL is not set')
  }

  try {
    await mongoose.connect(url)
    console.log('[db] Sucessfully connected to MongoDB')
  } catch (error) {
    console.log('[db] There was an error trying to connect to MongoDB')
    console.error(error)
  }
}

export default connect
