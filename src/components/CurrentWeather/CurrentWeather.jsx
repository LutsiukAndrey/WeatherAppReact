import styled from 'styled-components';

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
const Image = styled.img`
  margin-right: auto;
  margin-left: auto;
  box-sizing: content-box;
  @media screen and (min-width: 1280px) {
    height: 70px;
    width: 100px;
  }
`;
const Tempreture = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;
const DegNow = styled.p`
  color: #fff;
  font-size: 45px;
  line-height: 54px;
  font-weight: 300;

  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    font-size: 90px;
    line-height: 108px;
  }
`;
const WeatherList = styled.ul`
  display: flex;
  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const Min = styled.li`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Temp = styled.p`
  color: #767d85;
  @media screen and (min-width: 768px) {
    margin-bottom: 4px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 8px;
  }
`;
const Deg = styled.p`
  color: #fff;
`;
const Max = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
