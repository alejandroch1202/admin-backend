import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './routes'

const app = express()
const PORT = process.env.PORT ?? 4000

app.use(cors())
router(app)

app.listen(PORT, () => {
  console.log(`[server] Running on http://localhost:${PORT}`)
})
