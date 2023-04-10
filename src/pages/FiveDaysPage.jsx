import { Navigation } from 'components/Navigation/Navigation';
import { FiveDaysWeatherItem } from 'components/fiveDaysWeatherItem/fiveDaysWeatherItem';

import styled from 'styled-components';
import { useState } from 'react';

import nanoId from 'nano-id';
import { DetailsItem } from 'components/DetailsItem/DetailsItem';
import { SliderWeatherList } from 'components/SliderWeatherList/SliderWeatherList';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const FiveDaysPage = ({ arr, onSelectBtn }) => {
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
const Section = styled.section``;
const WeatherList = styled.ul`
  position: relative;

  justify-content: space-between;
  display: flex;
  gap: 17px;
  /* left: 0; */
  transition: all ease 1.5s;

  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    gap: 24px;
    padding: 0px 31px;

    margin-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;

    margin-bottom: 0px;
  }
`;
const FiveDaysWeather = styled.div`
  text-align: center;
  border-radius: 34px;
  background-color: rgba(16, 33, 54, 0.8);
  padding: 32px 5px 20px;
  width: 270px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 88px;
    padding: 40px 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-top: 0;
    padding: 40px 0;
  }
`;
const Title = styled.p`
  color: #fff;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 67px;
    margin-top: -100px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: -110px;
    margin-bottom: 77px;
  }
`;
const SliderBtns = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
`;

const DetailedListSlider = styled.div`
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  opacity: 0.8;
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    width: 644px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 1190px;
    margin-top: 32px;
  }
`;
const Items = styled.ul`
  padding-right: 30px;
  transition: all ease 1.5s;
  position: relative;
  left: 0;
  display: flex;
  padding-bottom: 20px;
`;
