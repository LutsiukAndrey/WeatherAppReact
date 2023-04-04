import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 32px 0 60px;
  @media screen and (min-width: 768px) {
    padding-top: 60px 0 80px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 80px 0 32px;
  }
`;

const HeaderForm = styled.div`
  margin: 0 auto;

  max-width: 280px;
  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 822px;
  }
`;
const SearchForm = styled.form`
  background-color: white;
  padding: 15px 20px;
  position: relative;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 16px;

  &::before {
    content: '';
    display: inline-block;
    top: 25%;
    background: url(../images/location.png) no-repeat center;
    opacity: 0.3;
    background-size: contain;
    width: 22px;
    height: 22px;
    position: absolute;
  }
`;
const SearchInput = styled.input`
  border: none;
  padding: 0;
  padding-left: 34px;
  color: black;
  font-size: 14px;
  font-weight: 400;
  width: 75%;
  outline: none;

  &::placeholder {
    color: black;
    font-size: 14px;
  }
`;
const FavoriteBtn = styled.button`
  fill: #000000;
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
  opacity: 0.471;
  border: none;
  width: 20px;
  height: 20px;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  transition: fill 200ms linear;
  background: url(../images/Star.png) no-repeat center;
`;
const GeoBtn = styled.button`
  fill: #000000;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  opacity: 0.471;
  border: none;
  width: 20px;
  height: 20px;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  transition: fill 200ms linear;
  background: url(../images/location.png) no-repeat center;
`;

export {
  HeaderContainer,
  HeaderForm,
  SearchInput,
  SearchForm,
  FavoriteBtn,
  GeoBtn,
};
