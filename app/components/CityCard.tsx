import { IWeatherInfo } from '../models/Weather'
import { countryIcons, weatherIcons } from '../utils/constants'

interface CityCardProps {
  weatherInfo: IWeatherInfo
}

export default function CityCard(props: CityCardProps) {
  const { city, country, currentTemp, condition, maxTemp, minTemp, rain, sunrise, sunset } =
    props.weatherInfo
  return (
    <div>
      <p>
        <strong>
          <u>{city} {countryIcons[country]}</u>
        </strong>
      </p>
      <p>
        • {weatherIcons[condition].icon} Temperatura actual:{' '}
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
        • 💧 Probabilidad de lluvia:{' '}
        <strong>
          <i>{rain}</i>
        </strong>
      </p>
      <p>
        • 🌅 Amanece a las:{' '}
        <strong>
          <i>{sunrise}</i>
        </strong>{' '}
        - 🌇 Anochece a las:{' '}
        <strong>
          <i>{sunset}</i>
        </strong>
      </p>
      <br />
    </div>
  )
}
