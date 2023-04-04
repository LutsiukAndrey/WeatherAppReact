import { DateNow } from 'components/DateNow/DateNow';
import { SunTime } from 'components/SunTime/SunTime';
import styled from 'styled-components';
export const LeftBottomWraper = () => {
  return (
    <Wraper>
      <DateNow />
      <SunTime />
    </Wraper>
  );
};
const Wraper = styled.div`
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  max-width: 276px;
  border-radius: 34px;
  background-color: rgba(16, 33, 54, 0.6);
  padding: 32px 61px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 32px 207px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    padding: 50px 103px 80px 16px;
    border-radius: 0 34px 0 0;
    margin: 0;
  }
`;
