import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  // res.send('Fetching all entrys diaries')

  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  // res.send('Fetching all entrys diaries')
  const diary = diaryServices.finbyId(parseInt(req.params.id))

  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

export default router
