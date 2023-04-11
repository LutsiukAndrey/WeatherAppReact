import styled from 'styled-components';

export const Slider = styled.div`
  overflow: hidden;

  width: 220px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;
export const SliderBtns = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    position: absolute;
    visibility: hidden;
    width: 1px;
    top: 0;
    left: 0;
  }
`;
export const SliderBtn = styled.button`
  background-color: transparent;
  border: transparent;
`;
