import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { useEffect } from 'react';
import { Slider, SliderBtn } from './SliderWeatherList.module';
import { SliderBtns } from '../FiveDays.module';
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
