import styled from 'styled-components';

export const SunTimeWraper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const Sun = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 120px;
  }
`;

export const SunriseTime = styled.li`
  display: flex;
  margin-right: 8px;
  @media screen and (min-width: 1280px) {
    margin-right: 29px;
  }
`;
export const SunsetTime = styled.li`
  display: flex;
`;
