"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComments = (commentsFromRequest) => {
    if (!isString(commentsFromRequest)) {
        throw new Error('Comments must be a string');
    }
    return commentsFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Date must be a string');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Weather must be a string');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Visibility must be a string');
    }
    return visibilityFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comments: parseComments(object.comments),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
