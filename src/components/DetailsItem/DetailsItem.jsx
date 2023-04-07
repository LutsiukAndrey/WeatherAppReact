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
    </Item>
  );
};

const Item = styled.li`
  list-style: none;
  min-width: 120px;
  padding: 20px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 32px;
    min-width: 152px;
  }
`;
const Time = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  opacity: 0.54;
`;
const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
`;
const Tempreture = styled.p`
  margin-bottom: 10px;

  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ff6b09;
  text-align: center;
  @media screen and (min-width: 1280px) {
    font-size: 25px;
    line-height: 30px;
  }
`;
const Speed = styled.p`
  margin-bottom: 4px;
  display: flex;

  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  opacity: 0.54;
`;
const Humidity = styled.p`
  margin-bottom: 4px;
  display: flex;

  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  opacity: 0.54;
`;
const Wind = styled.p`
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
