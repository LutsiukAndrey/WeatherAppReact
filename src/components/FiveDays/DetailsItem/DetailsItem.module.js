const { default: styled } = require('styled-components');

export const Item = styled.li`
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

export const Time = styled.p`
  font-size: 12px;
  line-height: 1.833;
  margin-top: 15px;
`;

export const Image = styled.img`
  margin: 0 auto;
  width: 60px;
  height: 60px;
  @media screen and (min-width: 1280px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;
export const Tempreture = styled.p`
  font-size: 18px;
  color: #ff6b08;
  line-height: 1.222;
  margin-bottom: 15px;
  @media screen and (min-width: 1280px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;
export const WeatherDesc = styled.ul`
  text-align: left;
  list-style: none;
  padding-left: 12px;
`;
export const Speed = styled.li`
  margin-bottom: 4px;
  display: flex;

  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  opacity: 0.54;
`;
export const Humidity = styled.li`
  margin-bottom: 4px;
  display: flex;

  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  opacity: 0.54;
`;
export const Wind = styled.li`
  display: flex;

  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  opacity: 0.54;
`;
export const Img = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;
