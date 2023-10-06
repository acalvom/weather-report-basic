export interface IWeatherInfo {
  code: string
  city: string
  country: string
  currentTemp: string
  condition: number
  maxTemp: string
  minTemp: string
  rain: string
  sunrise: string
  sunset: string
}


export interface IWeatherIcon {
  [key: number]: {
    text: string
    icon: string
  }
}