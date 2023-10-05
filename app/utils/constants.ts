import { IWeatherIcon } from '../models/Weather'

export const Cities = [
  { code: 'albacete', name: 'Albacete Spain' },
  { code: 'alcala', name: 'Alcala de Henares Spain' },
  { code: 'alicante', name: 'Alicante Spain' },
  { code: 'avila', name: 'Avila Spain' },
  { code: 'barcelona', name: 'Barcelona Spain' },
  { code: 'bilbao', name: 'Bilbao Spain' },
  { code: 'cadiz', name: 'Cadiz Spain' },
  { code: 'coslada', name: 'Coslada Spain' },
  { code: 'cuenca', name: 'Cuenca Spain' },
  { code: 'madrid', name: 'Madrid Spain' },
  { code: 'malaga', name: 'Malaga Spain' },
  { code: 'rieti', name: 'Rieti Italy' },
  { code: 'sansebastian', name: 'San Sebastian Spain' },
  { code: 'sevilla', name: 'Sevilla Spain' },
  { code: 'valencia', name: 'Valencia Spain' },
  { code: 'valladolid', name: 'Valladolid Spain' },
  { code: 'vitoria', name: 'Vitoria Spain' },
  { code: 'zaragoza', name: 'Zaragoza Spain' },
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

export const cityEmojis = {
  albacete: [':inigo-party:', ' :inigod:', ':inigo_hot:', ':iñigru:', ':bilbao:'],
  alcala: [':andrea-sun-queen:', ':andrea_brasero:', ':andrea_calvo:', ':andrea_tactica:'],
  alicante: [':ale-bounce:', ':ale-head:', ':ale-mrclean:', ':ale-pray:', ':ale_dreamer:'],
  avila: [
    ':jgleal-head:',
    ':lealwind:',
    ':jleal-bounce:',
    ':wii-sexy-leal:',
    ':happiest-paula-ever:',
    ':paula_bolt:',
    ':paula-encinar:',
  ],
  barcelona: [':gun-gary:', ':thug-gary:'],
  bilbao: [':inigo-party:', ' :inigod:', ':inigo_hot:', ':iñigru:', ':bilbao:'],
  cadiz: [':golden:', ':golden-bowtie:', ':golden_christmas_shepherd:'],
  coslada: [':andrea-sun-queen:', ':andrea_brasero:', ':andrea_calvo:', ':andrea_tactica:'],
  cuenca: [':irene-head:', ':irene-writer:', ':irene_walking:'],
  madrid: [
    ':marina-bunny:',
    ':marina-head:',
    ':marina_delighted:',
    ':marina_reindeer:',
    ':ivan-artist:',
    ':ivan-bunny:',
    ':ivan-head-flow:',
    ':ivan_deer:',
    ':vipp-bounce:',
    ':victor-thief:',
    ':victor_arrested:',
    ':victor_artist:',
    ':laura-cooker:',
    ':laura-head-reverse:',
    ':laura_delegate:',
    ':laura_jammies:',
    ':sergio-head:',
    ':david_face:',
    ':baumann-head:',
    ':bauman-fisio:',
    ':alarcon:',
    ':excalidani:',
  ],
  valencia: [
    ':alex-serra:',
    ':giner-head:',
    ':magic-giner:',
    ':betis-bounce:',
    ':betis-head:',
    ':betis_dark_knight:',
  ],
  vitoria: [':inigo-party:', ' :inigod:', ':inigo_hot:', ':iñigru:', ':bilbao:'],
}
