import { IWeatherInfo } from '../models/WeatherInfo'
import { weatherIcons } from '../utils/constants'

interface CityCardProps {
  weatherInfo: IWeatherInfo
}

export default function CityCard(props: CityCardProps) {
  const { city, currentTemp, condition, maxTemp, minTemp, rain, sunrise, sunset } =
    props.weatherInfo
  return (
    <div>
      <p>
        <strong>
          <u>{city}</u>
        </strong>
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
  )
}
