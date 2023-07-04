const { default: styled } = require('styled-components');

export const ChartContainer = styled.div`
  /* text-align: center; */
  border-radius: 34px;
  background-color: rgba(16, 33, 54, 0.8);
  padding: 32px 5px 20px;
  width: 270px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 20px 65px 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    padding: 16px 11px 32px;
  }
`;
export const HideChartBtn = styled.button`
  color: #ff6b09;
  background-color: transparent;
  border: transparent;
  text-decoration: underline;
  font-size: 12px;
  line-height: 14px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-bottom: 20px;
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
export const AverageSquare = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  width: 10px;
  height: 10px;
`;
