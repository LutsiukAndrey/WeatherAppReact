import { Navigation } from 'components/Navigation/Navigation';
import { FiveDaysWeatherItem } from 'components/FiveDays/fiveDaysWeatherItem/fiveDaysWeatherItem';

import styled from 'styled-components';
import { useState } from 'react';

import nanoId from 'nano-id';
import { DetailsItem } from 'components/FiveDays/DetailsItem/DetailsItem';
import { SliderWeatherList } from 'components/FiveDays/SliderWeatherList/SliderWeatherList';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  DetailedListSlider,
  FiveDaysWeather,
  Items,
  Section,
  SliderBtns,
  Title,
  WeatherList,
} from './FiveDays.module';

export const FiveDays = ({ arr, onSelectBtn }) => {
  const mob = window.innerWidth <= 768;
  const tablet = window.innerWidth > 768 && window.innerWidth < 1279;
  const desctop = window.innerWidth > 1279;
  const [offset, setOffset] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [index, setIndex] = useState(0);
  const [weatherListOffset, setWeatherListOffset] = useState(0);
  const onMoreClick = event => {
    setIndex(event.target.id);
    if (index !== event.target.id) {
      setShowMore(true);
      return;
    }
    if (index === event.target.id) {
      setShowMore(!showMore);
      return;
    }
  };
  const onPrevClick = () => {
    if (offset === 0) {
      return;
    }
    if (mob) {
      setOffset(prev => (prev -= 137));
    }
    if (tablet) {
      setOffset(prev => (prev -= 129));
    }
    if (desctop) {
    }
  };

  const onNextClick = () => {
    if (mob) {
      setOffset(prev => (prev += 137));

      if (offset > 900) {
        setOffset(0);
      }
    }
    if (tablet) {
      setOffset(prev => (prev += 129));
      if (offset > 408) {
        setOffset(0);
      }
    }
    if (desctop) {
      setOffset(prev => (prev += 172));
      if (offset > 168) {
        setOffset(0);
      }
    }
  };
  const changeWeaterListOffset = data => {
    setWeatherListOffset(data);
  };

  return (
    <Section>
      <Navigation onSelectBtn={onSelectBtn} />
      <FiveDaysWeather>
        <Title>
          {arr.city}, {arr.country}
        </Title>
        <SliderWeatherList cb={changeWeaterListOffset}>
          <WeatherList style={{ left: `${-weatherListOffset}px` }}>
            {arr.weatherFiveDays.map(data => {
              return (
                <FiveDaysWeatherItem
                  index={arr.weatherFiveDays.indexOf(data)}
                  key={nanoId()}
                  data={data}
                  onMoreClick={onMoreClick}
                />
              );
            })}
          </WeatherList>
        </SliderWeatherList>

        {showMore ? (
          <>
            <DetailedListSlider>
              <Items style={{ left: `${-offset}px` }}>
                {arr.weatherFiveDays[index].forecast.map(data => {
                  return <DetailsItem key={nanoId()} data={data} />;
                })}
              </Items>
            </DetailedListSlider>
            {/* {window.innerWidth > 768 ? ( */}
            <SliderBtns>
              <ArrowBackIosIcon
                onClick={onPrevClick}
                fontSize="8px"
                sx={{ color: '#ffffff' }}
              />
              <ArrowForwardIosIcon
                onClick={onNextClick}
                fontSize="8px"
                sx={{ color: '#ffffff' }}
              />
            </SliderBtns>
          </>
        ) : (
          <></>
        )}
      </FiveDaysWeather>
    </Section>
  );
};
