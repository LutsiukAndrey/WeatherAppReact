const { default: styled } = require('styled-components');

export const Section = styled.section`
  /* margin-bottom: 90px; */
`;
export const WeatherList = styled.ul`
  position: relative;

  justify-content: space-between;
  display: flex;
  gap: 17px;
  /* left: 0; */
  transition: all ease 1.5s;

  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    gap: 24px;
    padding: 0px 31px;

    margin-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;

    margin-bottom: 0px;
  }
`;
export const FiveDaysWeather = styled.div`
  text-align: center;
  border-radius: 34px;
  background-color: rgba(16, 33, 54, 0.8);
  padding: 32px 5px 20px;
  width: 270px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 88px;
    padding: 40px 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-top: 0;
    padding: 40px 0;
  }
`;
export const Title = styled.p`
  color: #fff;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 67px;
    margin-top: -100px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: -110px;
    margin-bottom: 77px;
  }
`;
export const SliderBtns = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
`;

export const DetailedListSlider = styled.div`
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  opacity: 0.8;
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    width: 644px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 1190px;
    margin-top: 32px;
  }
`;
export const Items = styled.ul`
  padding-right: 30px;
  transition: all ease 1.5s;
  position: relative;
  left: 0;
  display: flex;
  padding-bottom: 20px;
`;
export const ShowChartBtn = styled.button`
  color: #ff6b09;
  background-color: transparent;
  border: transparent;
  text-decoration: underline;
  font-size: 12px;
  line-height: 14px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
