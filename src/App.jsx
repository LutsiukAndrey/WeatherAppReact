import React, { useEffect, useState } from 'react';
import { Container } from 'components/Container/Container';
import { Header } from 'components/header/Header';
import { Today } from 'components/Today/Today';
import { FiveDays } from 'components/FiveDays/FiveDays';
import { fetchBcgImg } from 'API/fetchBacgroundImage';
import { fetchCurrentToday } from 'API/fetchCurrentWeathe';
import { Circles } from 'react-loader-spinner';
import { fetcFiveDaysWeather } from 'API/fetcFiveDaysWeather';
import { keys } from 'API/keys';

export const App = () => {
  const [city, setCity] = useState('Kyiv');
  const [weatherTodayArr, setweatherTodayArr] = useState(null);
  const [weatherFiveDaysArr, setWeatherFiveDaysArr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectBtn, setSelectBtn] = useState('TODAY');

  const onSelectBtn = event => {
    setSelectBtn(event.target.textContent);
  };
  const onChangeSity = name => {
    setCity(name);
  };

  useEffect(() => {
    fetchBcgImg(city);
    setIsLoading(true);
    const getWeatherToday = async () => {
      const { data } = await fetchCurrentToday(city);
      setweatherTodayArr(data);
      setIsLoading(false);
    };

    const getWeatherFiveDays = async () => {
      const data = await fetcFiveDaysWeather(city);
      setWeatherFiveDaysArr(data);
      setIsLoading(false);
    };

    getWeatherToday();

    getWeatherFiveDays();
  }, [city]);

  return (
    <Container>
      <Header onChangeSity={onChangeSity} />
      {isLoading ? (
        <Circles />
      ) : (
        <>
          {selectBtn === 'TODAY' ? (
            <Today data={weatherTodayArr} onSelectBtn={onSelectBtn} />
          ) : (
            <FiveDays arr={weatherFiveDaysArr} onSelectBtn={onSelectBtn} />
          )}
        </>
      )}
    </Container>
  );
};
