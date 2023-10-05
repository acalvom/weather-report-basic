import { IWeatherIcon } from "../models/Weather"

export const Cities = [
  { code: 'albacete', name: 'Albacete Spain', emoji: ':bilbao:' },
  { code: 'alcala', name: 'Alcala de Henares Spain', emoji: ':andrea_brasero:' },
  { code: 'alicante', name: 'Alicante Spain', emoji: ':ale-mrclean:' },
  { code: 'avila', name: 'Avila Spain', emoji: ':bilbao:' },
  { code: 'barcelona', name: 'Barcelona Spain', emoji: ':bilbao:' },
  { code: 'bilbao', name: 'Bilbao Spain', emoji: ':bilbao:' },
  { code: 'cadiz', name: 'Cadiz Spain', emoji: ':bilbao:' },
  { code: 'coslada', name: 'Coslada Spain', emoji: ':bilbao:' },
  { code: 'cuenca', name: 'Cuenca Spain', emoji: ':bilbao:' },
  { code: 'madrid', name: 'Madrid Spain', emoji: ':bilbao:' },
  { code: 'malaga', name: 'Malaga Spain', emoji: ':bilbao:' },
  { code: 'rieti', name: 'Rieti Italy', emoji: ':bilbao:' },
  { code: 'sansebastian', name: 'San Sebastian Spain', emoji: ':bilbao:' },
  { code: 'sevilla', name: 'Sevilla Spain', emoji: ':bilbao:' },
  { code: 'valencia', name: 'Valencia Spain', emoji: ':bilbao:' },
  { code: 'valladolid', name: 'Valladolid Spain', emoji: ':bilbao:' },
  { code: 'vitoria', name: 'Vitoria Spain', emoji: ':bilbao:' },
  { code: 'zaragoza', name: 'Zaragoza Spain', emoji: ':bilbao:' },
]

export const countryIcons: { [key: string]: string } = {
  Spain: '🇪🇸',
  Italy: '🇮🇹',
}

export const weatherIcons: IWeatherIcon = {
  1000: {
    text: 'Sunny',
    icon: '☀️',
  },
  1003: {
    text: 'Partly Cloudy',
    icon: '🌤',
  },
  1006: {
    text: 'Cloudy',
    icon: '☁️',
  },
  1009: {
    text: 'Cloudy',
    icon: '☁️',
  },
  1030: {
    text: 'Mist',
    icon: '🌫',
  },
  1063: {
    text: 'Rainy',
    icon: '🌧',
  },
  1066: {
    text: 'Snowy',
    icon: '🌨',
  },
  1069: {
    text: 'Sleet',
    icon: '🌧🌨',
  },
  1072: {
    text: 'Drizzle',
    icon: '🌧',
  },
  1087: {
    text: 'Thundery',
    icon: '🌩',
  },
  1114: {
    text: 'Snow',
    icon: '❄️',
  },
  1117: {
    text: 'Blizzard',
    icon: '💨',
  },
  1135: {
    text: 'Fog',
    icon: '🌫',
  },
  1147: {
    text: 'Fog',
    icon: '🌫',
  },
  1150: {
    text: 'Drizzle',
    icon: '🌧',
  },
  1153: {
    text: 'Drizzle',
    icon: '🌧',
  },
  1168: {
    text: 'Drizzle',
    icon: '🌧',
  },
  1171: {
    text: 'Drizzle',
    icon: '🌧',
  },
  1180: {
    text: 'Drizzle',
    icon: '🌧',
  },
  1183: {
    text: 'Light rain',
    icon: '🌧',
  },
  1186: {
    text: 'Moderate rain',
    icon: '🌧',
  },
  1189: {
    text: 'Moderate rain',
    icon: '🌧',
  },
  1192: {
    text: 'Heavy rain',
    icon: '🌧',
  },
  1195: {
    text: 'Heavy rain',
    icon: '🌧',
  },
  1198: {
    text: 'Light freezing rain',
    icon: '🌧',
  },
  1201: {
    text: 'Moderate or heavy freezing rain',
    icon: '🌧',
  },
  1204: {
    text: 'Light sleet',
    icon: '🌧',
  },
  1207: {
    text: 'Moderate or heavy sleet',
    icon: '🌧',
  },
  1210: {
    text: 'Light snow',
    icon: '❄️',
  },
  1213: {
    text: 'Light snow',
    icon: '❄️',
  },
  1216: {
    text: 'Moderate snow',
    icon: '❄️',
  },
  1219: {
    text: 'Moderate snow',
    icon: '❄️',
  },
  1222: {
    text: 'Heavy snow',
    icon: '❄️',
  },
  1225: {
    text: 'Heavy snow',
    icon: '❄️',
  },
  1237: {
    text: 'Ice pellets',
    icon: '❄️',
  },
  1273: {
    text: 'Patchy light rain in area with thunder',
    icon: '🌨 🌩',
  },
  1276: {
    text: 'Moderate or heavy rain in area with thunder',
    icon: '🌨 🌩',
  },
  1279: {
    text: 'Patchy light snow in area with thunder',
    icon: '🌨 🌩',
  },
  1282: {
    text: 'Moderate or heavy snow in area with thunder',
    icon: '🌨 🌩',
  },
}
