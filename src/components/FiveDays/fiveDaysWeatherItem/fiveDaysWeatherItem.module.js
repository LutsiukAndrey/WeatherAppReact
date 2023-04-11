const { default: styled } = require('styled-components');

export const FiveDaysItem = styled.li`
  opacity: 0.8;

  min-width: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-width: 100px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 181px;
  }
`;
export const DayName = styled.h3`
  color: rgba(118, 125, 133, 1);
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const Date = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;
export const Image = styled.img`
  margin-bottom: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 35px;
  height: 35px;
  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
  }
`;
export const MinOrMax = styled.ul`
  display: flex;
  color: rgba(118, 125, 133, 1);
  font-size: 12px;
  line-height: 14px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const Min = styled.li`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;
export const Deg = styled.p`
  color: rgba(255, 107, 9, 1);
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 4px;
  }
`;
export const MoreInfo = styled.button`
  color: rgba(118, 125, 133, 1);
  background-color: transparent;
  border: transparent;
  text-decoration: underline;
  font-size: 12px;
  line-height: 14px;
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
