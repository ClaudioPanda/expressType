import { DiaryEntry } from '../types'
import { Weather, Visibility } from '../enum'

const diaryEntries: DiaryEntry[] = [
  {
    id: 4,
    date: '2019-01-01',
    weather: Weather.Sunny,
    visibility: Visibility.Day,
    comments: "I'm getting pretty good at this"
  },
  {
    id: 5,
    date: '2019-02-15',
    weather: Weather.Rainy,
    visibility: Visibility.Day,
    comments: "I'm feel good"
  },
  {
    id: 6,
    date: '2020-02-15',
    weather: Weather.Cloudy,
    visibility: Visibility.Night,
    comments: "I'm feel good"
  }
]

export default diaryEntries
