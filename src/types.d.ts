import { Weather, Visibility } from './enum'
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comments: string
}

// export type NonSensitiveInfoDiaryEntry = Pick <DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comments'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
