import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // Middleware que trasnforma la req.body a un json

const PORT = 5500

app.get('/ping', (_req, res) => {
  console.log('Alguien tiro un ping :' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
