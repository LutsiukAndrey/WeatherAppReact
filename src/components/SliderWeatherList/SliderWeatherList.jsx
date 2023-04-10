import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
export const SliderWeatherList = ({ children, cb }) => {
  const [offset, setOffset] = useState(0);

  const onPrevClick = () => {
    if (offset === 0) {
      return;
    }

    setOffset(prev => (prev -= 76));
  };

  const onNextClick = () => {
    setOffset(prev => (prev += 76));

    if (offset > 152) {
      setOffset(0);
    }
  };
  useEffect(() => {
    cb(offset);
  }, [offset, cb]);
  return (
    <>
      <Slider>{children}</Slider>
      <SliderBtns>
        <SliderBtn onClick={onPrevClick}>
          <ArrowBackIosIcon fontSize="8px" sx={{ color: '#ffffff' }} />
        </SliderBtn>
        <SliderBtn onClick={onNextClick}>
          <ArrowForwardIosIcon fontSize="8px" sx={{ color: '#ffffff' }} />
        </SliderBtn>
      </SliderBtns>
    </>
  );
};
const Slider = styled.div`
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
const SliderBtns = styled.div`
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
const SliderBtn = styled.button`
  background-color: transparent;
  border: transparent;
`;
