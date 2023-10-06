import { Cities } from '../utils/constants'
import CityCard from './CityCard'
import { IWeatherInfo } from '../models/Weather'

async function getWeather(city: string) {
  const res = await fetch(`${process.env.API_URL}&q=${city}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function CityList() {
  return (
    <div>
      <div className="max-w-md p-6 bg-white border border-gray-400 rounded-lg shadow">
        {Cities.map(async (city) => {
          const weather = await getWeather(city.name)
          const weatherInfo: IWeatherInfo = {
            code: city.code,
            city: weather.location.name,
            country: weather.location.country,
            currentTemp: (Math.round(weather.current.temp_c) + 'ºC'),
            condition: weather.forecast.forecastday[0].day.condition.code,
            maxTemp: (Math.round(weather.forecast.forecastday[0].day.maxtemp_c) + 'ºC'),
            minTemp: (Math.round(weather.forecast.forecastday[0].day.mintemp_c) + 'ºC'),
            rain: (weather.forecast.forecastday[0].day.daily_chance_of_rain + '%'),
            sunrise: weather.forecast.forecastday[0].astro.sunrise,
            sunset: weather.forecast.forecastday[0].astro.sunset,
          }
          return <CityCard key={city.name} weatherInfo={weatherInfo} />
        })}
      </div>
    </div>
  )
}
