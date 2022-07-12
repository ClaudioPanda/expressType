"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const diaryEntries = [
    {
        id: 4,
        date: '2019-01-01',
        weather: types_1.Weather.Sunny,
        visibility: types_1.Visibility.Day,
        comments: "I'm getting pretty good at this"
    },
    {
        id: 5,
        date: '2019-02-15',
        weather: types_1.Weather.Rainy,
        visibility: types_1.Visibility.Day,
        comments: "I'm feel good"
    },
    {
        id: 6,
        date: '2020-02-15',
        weather: types_1.Weather.Cloudy,
        visibility: types_1.Visibility.Night,
        comments: "I'm feel good"
    }
];
exports.default = diaryEntries;
