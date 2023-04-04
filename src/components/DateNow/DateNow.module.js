import styled from 'styled-components';
const Timer = styled.div``;
const Day = styled.div`
  font-size: 45px;
  line-height: 54px;
  font-weight: 300;
  letter-spacing: 4%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
  @media screen and (min-width: 768px) {
    font-size: 90px;
    line-height: 108px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 480px;
  }
`;
const MonthName = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
const DayEnding = styled.span`
  font-size: 75%;
  top: -0.5em;
  margin-right: 20px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 40px;
  }
`;
const MonthCurrent = styled.span`
  display: flex;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 4%;

  justify-content: space-around;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 136px;
    margin-bottom: 0;
  }
`;

//  .sun_time-img {
//      margin-right: 8px;

export { Day, DayEnding, MonthCurrent, MonthName, Timer };
