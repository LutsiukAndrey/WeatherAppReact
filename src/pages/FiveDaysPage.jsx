import { Navigation } from 'components/Navigation/Navigation';
import { FiveDaysWeatherItem } from 'components/fiveDaysWeatherItem/fiveDaysWeatherItem';
import { test } from 'API/test';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetcFiveDaysWeather } from 'API/fetcFiveDaysWeather';
import { Circles } from 'react-loader-spinner';
import nanoId from 'nano-id';
import { DetailsItem } from 'components/DetailsItem/DetailsItem';
export const FiveDaysPage = ({ arr, onSelectBtn }) => {
  return (
    <section className="five-days-section">
      <Navigation onSelectBtn={onSelectBtn} />
      <FiveDaysWeather>
        <Title>
          {arr.city}, {arr.country}
        </Title>
        <Slider>
          <WeatherList>
            {arr.weatherFiveDays.map(data => {
              return <FiveDaysWeatherItem key={nanoId()} data={data} />;
            })}
          </WeatherList>
        </Slider>

        <SliderBtns>
          <SliderBtn>
            <img src="./images/prev.png" className="prev" alt="" />
          </SliderBtn>
          <SliderBtn>
            <img src="./images/next.png" className="next" alt="" />
          </SliderBtn>
        </SliderBtns>
        <DetailedList>
          <MoreList>
            {arr.weatherFiveDays[0].forecast.map(data => {
              return <DetailsItem key={nanoId()} data={data} />;
            })}
          </MoreList>
        </DetailedList>
      </FiveDaysWeather>
    </section>
  );
};
const WeatherList = styled.ul`
  justify-content: space-between;
  display: flex;
  position: relative;
  gap: 17px;
  left: 0;
  transition: all ease 1.5s;
  // padding: 0px 25px;
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
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-top: 88px;
    padding: 40px 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-top: 0;
    padding: 40px 43px;
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
const DetailedList = styled.div`
  overflow: hidden;
`;
const MoreList = styled.div`
  position: relative;
  left: 0;
  transition: all ease 1.5s;
  display: flex;
  gap: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 33px;
  }
`;
