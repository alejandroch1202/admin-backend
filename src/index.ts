import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connect from './db/mongo'
import router from './routes'

const PORT = process.env.PORT ?? 4000
const HOST = process.env.HOST ?? 'http://localhost'

const app = express()

connect()
app.use(express.json())
app.use(cors())
router(app)

app.listen(PORT, () => {
  console.log(`[server] Running on ${HOST}:${PORT}`)
})
