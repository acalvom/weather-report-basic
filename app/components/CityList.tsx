'use client'
import { useState } from 'react'
import { Cities, payload, weatherIcons } from '../utils/constants'

async function getWeather(city: string) {
  const res = await fetch(`${process.env.API_URL}&q=${city}`, {
    next: {
      revalidate: 0,
    },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default function CityList() {
  //   const weather = await getWeather('Madrid')
  const weather = payload
  const city = weather.location.name
  const currentTemp = weather.current.temp_c + 'ºC'
  const condition: number = weather.forecast.forecastday[0].day.condition.code
  const maxTemp = Math.round(weather.forecast.forecastday[0].day.maxtemp_c) + 'ºC'
  const minTemp = Math.round(weather.forecast.forecastday[0].day.mintemp_c) + 'ºC'
  const rain = weather.forecast.forecastday[0].day.daily_chance_of_rain + '%'

  const sunrise = weather.forecast.forecastday[0].astro.sunrise
  const sunset = weather.forecast.forecastday[0].astro.sunset

  const [isFancy, setIsFancy] = useState(true)
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow">
        {isFancy ? (
          <>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{city} </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              {weatherIcons[condition].icon} {currentTemp}
            </p>
            <p className="mb-3 font-normal text-gray-700 ">
              ⏫ {maxTemp} ⏬ {minTemp}
            </p>
            <p className="mb-3 font-normal text-gray-700 ">💧{rain}</p>
            <p className="mb-3 font-normal text-gray-700 ">
               🌅 {sunrise} 🌇 {sunset}
            </p>
          </>
        ) : (
          <div>
            <p>
              <strong><u>{city}</u></strong>
            </p>
            <p>
              • {weatherIcons[condition].icon} Current temperature:{' '}
              <strong>
                <i>{currentTemp}</i>
              </strong>
            </p>
            <p>
              • ⏫ Max:{' '}
              <strong>
                <i>{maxTemp}</i>
              </strong>{' '}
              - ⏬ Min:{' '}
              <strong>
                <i>{minTemp}</i>
              </strong>
            </p>
            <p>
              • 💧 Chance of rain:{' '}
              <strong>
                <i>{rain}</i>
              </strong>
            </p>
            <p>
              • 🌅 Sunrise at:{' '}
              <strong>
                <i>{sunrise}</i>
              </strong>{' '}
              🌇 Sunset at:{' '}
              <strong>
                <i>{sunset}</i>
              </strong>
            </p>
            <br />
          </div>
        )}
        <button
          onClick={() => setIsFancy(!isFancy)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Slack message
        </button>
      </div>
    </div>
  )
}
