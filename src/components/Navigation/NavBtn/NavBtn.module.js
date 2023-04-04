import styled from 'styled-components';

export const NavButton = styled.button`
  padding: 5px 39px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: transparent;
  color: #000;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  &:hover,
  &:focus {
    background-color: #fff;
  }
  @media screen and (min-width: 768px) {
    padding: 5px 52px;
  }
  @media screen and (min-width: 1280px) {
    padding: 5px 67px;
  }
`;
