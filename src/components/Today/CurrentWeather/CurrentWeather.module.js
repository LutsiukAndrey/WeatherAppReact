import styled from 'styled-components';

export const Image = styled.img`
  margin-right: auto;
  margin-left: auto;
  box-sizing: content-box;
  @media screen and (min-width: 1280px) {
    height: 70px;
    width: 100px;
  }
`;
export const Tempreture = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;
export const DegNow = styled.p`
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
export const WeatherList = styled.ul`
  display: flex;
  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Min = styled.li`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Temp = styled.p`
  color: #767d85;
  @media screen and (min-width: 768px) {
    margin-bottom: 4px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 8px;
  }
`;
export const Deg = styled.p`
  color: #fff;
`;
export const Max = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
