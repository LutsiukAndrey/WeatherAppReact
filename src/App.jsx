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
  const [weatherArr, setweatherArr] = useState([]);
  const [city, setCity] = useState('Kyiv');
  const [isLoading, setIsLoading] = useState(true);
  const [arr, setArr] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [selectBtn, setSelectBtn] = useState('Today');

  const onHandleSubmit = event => {
    event.preventDefault();
    if (inputValue) {
      setCity(inputValue);
      console.log(inputValue);
    }
    event.target.query.value = '';
    console.log(event.target.query.value);
    console.log(inputValue);
    return;
  };
  const onHandleChange = event => {
    setInputValue(event.target.value);
  };

  const onSelectBtn = event => {
    setSelectBtn(event.target.textContent);
    console.log('sadfsadf');
  };
  useEffect(() => {
    fetchBcgImg(city);
    setIsLoading(true);
    const getWeather = async () => {
      const { data } = await fetchCurrentToday(city);
      setweatherArr(data);
      setIsLoading(false);
    };
    getWeather();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  useEffect(() => {
    setIsLoading(true);
    const getWeather = async () => {
      const data = await fetcFiveDaysWeather(city);
      // return resolt;
      setArr(data);
      setIsLoading(false);
    };
    getWeather();
  }, [city]);

  return (
    <Container>
      <Header onHandleSubmit={onHandleSubmit} onHandleChange={onHandleChange} />

      {isLoading ? (
        <Circles />
      ) : (
        <>
          {selectBtn === 'TODAY' ? (
            <TodayPage data={weatherArr} onSelectBtn={onSelectBtn} />
          ) : (
            <FiveDaysPage arr={arr} onSelectBtn={onSelectBtn} />
          )}
        </>
      )}
    </Container>
  );
};
