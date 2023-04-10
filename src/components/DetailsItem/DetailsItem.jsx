import styled from 'styled-components';

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

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 8px;
    @media screen and (min-width: 1280px) {
      margin-right: 18px;
    }
  }
  padding-top: 8px;

  list-style: none;
  min-width: 128px;
  height: 220px;
  font-size: 14px;
  text-align: center;
  color: #ffffff8a;
  border: 1px solid #ffffff8a;
  border-radius: 25px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 0;
  }
  @media screen and (min-width: 768px) {
    min-width: 120px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 152px;
    margin: 0;
    padding-top: 4px;
  }
`;

const Time = styled.p`
  font-size: 12px;
  line-height: 1.833;
  margin-top: 15px;
`;

const Image = styled.img`
  margin: 0 auto;
  width: 60px;
  height: 60px;
  @media screen and (min-width: 1280px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;
const Tempreture = styled.p`
  font-size: 18px;
  color: #ff6b08;
  line-height: 1.222;
  margin-bottom: 15px;
  @media screen and (min-width: 1280px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;
const WeatherDesc = styled.ul`
  text-align: left;
  list-style: none;
  padding-left: 12px;
`;
const Speed = styled.li`
  margin-bottom: 4px;
  display: flex;

  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  opacity: 0.54;
`;
const Humidity = styled.li`
  margin-bottom: 4px;
  display: flex;

  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  opacity: 0.54;
`;
const Wind = styled.li`
  display: flex;

  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  opacity: 0.54;
`;
const Img = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;
