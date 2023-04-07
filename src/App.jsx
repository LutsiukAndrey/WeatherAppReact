import React, { useEffect, useState } from 'react';
import { Container } from 'components/Container/Container';
import { Header } from 'components/header/Header';
import { TodayPage } from 'pages/TodayPage';
import { FiveDaysPage } from 'pages/FiveDaysPage';
import { fetchBcgImg } from 'API/fetchBacgroundImage';
import { fetchCurrentToday } from 'API/fetchCurrentWeathe';
import { Circles } from 'react-loader-spinner';
import { fetcFiveDaysWeather } from 'API/fetcFiveDaysWeather';

export const App = () => {
  const [city, setCity] = useState('Kyiv');
  const [inputValue, setInputValue] = useState(null);
  const [weatherTodayArr, setweatherTodayArr] = useState([]);
  const [weatherFiveDaysArr, setWeatherFiveDaysArr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectBtn, setSelectBtn] = useState('TODAY');

  const onHandleSubmit = event => {
    event.preventDefault();
    if (inputValue) {
      setCity(inputValue);
    }

    event.target.query.value = '';
    return;
  };

  const onHandleChange = event => {
    setInputValue(event.target.value);
  };

  const onSelectBtn = event => {
    setSelectBtn(event.target.textContent);
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
  }, [city, selectBtn]);

  return (
    <Container>
      <Header onHandleSubmit={onHandleSubmit} onHandleChange={onHandleChange} />
      {isLoading ? (
        <Circles />
      ) : (
        <>
          {selectBtn === 'TODAY' ? (
            <TodayPage data={weatherTodayArr} onSelectBtn={onSelectBtn} />
          ) : (
            <FiveDaysPage arr={weatherFiveDaysArr} onSelectBtn={onSelectBtn} />
          )}
        </>
      )}
    </Container>
  );
};
