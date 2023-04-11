import {
  Deg,
  DegNow,
  Image,
  Max,
  Min,
  Temp,
  Tempreture,
  WeatherList,
} from './CurrentWeather.module';

export const CurrentWeather = ({ data }) => {
  const { main, sys, name, weather } = data;
  return (
    <>
      <Image
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt=""
      />
      <p>
        {name}, {sys.country}
      </p>

      <Tempreture>
        <DegNow>{Math.round(main.temp)}</DegNow>
        <WeatherList>
          <Min>
            <Temp>min</Temp>
            <Deg>
              {Math.round(main.temp_min)}
              <sup>o</sup>
            </Deg>
          </Min>
          <Max>
            <Temp>max</Temp>
            <Deg>
              {Math.round(main.temp_max)}
              <sup>o</sup>
            </Deg>
          </Max>
        </WeatherList>
      </Tempreture>
    </>
  );
};
