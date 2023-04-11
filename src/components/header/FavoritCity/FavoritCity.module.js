import styled from 'styled-components';
const FavoritCityButton = styled.button`
  max-width: 130px;
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

  @include tablet {
    max-width: 110px;

    font-size: 14px;
    line-height: 17px;
  }
`;

export { FavoritCityButton };
