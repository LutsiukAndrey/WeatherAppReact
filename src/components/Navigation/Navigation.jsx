import { NavButtons } from './Navigation.module';
import { NavBtn } from './NavBtn/NavBtn';
import { useRef } from 'react';

export const Navigation = ({ onSelectBtn }) => {
  return (
    <NavButtons onClick={onSelectBtn}>
      <NavBtn name={'TODAY'} />
      <NavBtn name={'5 DAYS'} />
    </NavButtons>
  );
};
