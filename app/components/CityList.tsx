import { useEffect } from 'react'
import { Cities, payload } from '../utils/constants'

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
export default async function CityList() {

//   const weather = await getWeather('Madrid')
  const weather = payload
  console.log('🚀 ~ CityList ~ weather:', weather.forecast.forecastday[0].day)

  return <div>CityList</div>
}
