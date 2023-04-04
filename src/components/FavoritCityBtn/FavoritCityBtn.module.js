import styled from 'styled-components';
const FavoritCityButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 5px 12px;
  background-color: rgba(16, 33, 54, 0.5);
  border: transparent;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  font-family: Lato;
  font-weight: 400;
  &:hover,
  &:focus {
    background-color: #fff;
    color: #000;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:first-child {
    margin-left: 32px;
  }
  @include tablet {
    font-size: 14px;
    line-height: 17px;
  }
`;

export { FavoritCityButton };
