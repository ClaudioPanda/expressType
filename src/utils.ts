import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enum'

const parseComments = (commentsFromRequest: any): string => {
  if (!isString(commentsFromRequest)) {
    throw new Error('Comments must be a string')
  }
  return commentsFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Date must be a string')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Weather must be a string')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Visibility must be a string')
  }
  return visibilityFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comments: parseComments(object.comments),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
