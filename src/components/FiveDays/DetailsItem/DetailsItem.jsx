import {
  Humidity,
  Image,
  Img,
  Item,
  Speed,
  Tempreture,
  Time,
  WeatherDesc,
  Wind,
} from './DetailsItem.module';

export const DetailsItem = ({ data }) => {
  const { main, wind, weather, dt } = data;
  function hourConverter(UNIX) {
    let newDate = new Date(UNIX * 1000);
    let hour =
      newDate.getUTCHours() < 10
        ? '0' + newDate.getUTCHours()
        : newDate.getUTCHours();
    let min =
      newDate.getMinutes() < 10
        ? '0' + newDate.getUTCMinutes()
        : newDate.getUTCMinutes();
    let CurrentHour = `${hour}:${min}`;
    return CurrentHour;
  }
  return (
    <Item>
      <Time>{hourConverter(dt)}</Time>
      <Image
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      />
      <Tempreture>{Math.round(main.temp)}</Tempreture>
      <WeatherDesc>
        <Speed>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/2770/2770339.png"
            alt=""
          />
          {main.pressure}mm
        </Speed>
        <Humidity>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/8923/8923419.png"
            alt=""
          />
          {main.humidity}%
        </Humidity>
        <Wind>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/615/615486.png"
            alt=""
          />
          {wind.speed} m/s
        </Wind>
      </WeatherDesc>
    </Item>
  );
};
