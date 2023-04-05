import { FiveDaysPage } from 'pages/FiveDaysPage';
import { TodayPage } from 'pages/TodayPage';
import { Link } from 'react-router-dom';

const { default: styled } = require('styled-components');
const { NavBtn } = require('./NavBtn/NavBtn');

export const Navigation = () => {
  return (
    <NavButtons>
      <nav>
        <Link to={'/'}>
          {' '}
          <NavBtn name={'TODAY'} />
        </Link>
        <Link to={'fiveDays'}>
          <NavBtn name={'5 DAYS'} />{' '}
        </Link>
      </nav>
    </NavButtons>
  );
};
const NavButtons = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  max-width: 280px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 336px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 395px;
    margin-right: 0;
    margin-left: auto;
    margin-bottom: 38px;
  }
`;
