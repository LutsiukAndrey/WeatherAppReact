import StarBorderIcon from '@mui/icons-material/StarBorder';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import {
  HeaderContainer,
  HeaderForm,
  SearchInput,
  SearchForm,
  AddToFavoriteBtn,
  GeoBtn,
} from './Header.module';
import { FavoritCity } from 'components/header/FavoritCity/FavoritCity';
import { useState, useEffect } from 'react';
import { geoLocationByCoords } from 'API/fetchLocationByCoords';

export const Header = ({ onChangeSity }) => {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('');
  const [favoritCitys, setFavoritCitys] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const { latitude, longitude } = coords;
      const result = await geoLocationByCoords(latitude, longitude);
      setCity(result);
      setInputValue(result);
    });
    const localStoregeFavoritCitys = localStorage.getItem('FavoritCitys');
    const parsedFavoritCitys = JSON.parse(localStoregeFavoritCitys) || [];
    setFavoritCitys(parsedFavoritCitys);
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    if (inputValue) {
      setCity(inputValue);
    }
  };

  const onHandleChange = event => {
    setInputValue(event.target.value);
  };

  const addToFavorit = () => {
    if (!favoritCitys.includes(city)) {
      const normolizedValue = city
        .trim()
        .replace(city[0], city[0].toUpperCase());
      setFavoritCitys(prev => [...prev, normolizedValue]);
    }
  };

  const onFavoritCityClick = name => {
    setCity(name);
    setInputValue(name);
  };

  const onGeoClick = () => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const { latitude, longitude } = coords;
      const result = await geoLocationByCoords(latitude, longitude);
      setCity(result);
      setInputValue(result);
    });
  };

  useEffect(() => {
    localStorage.setItem('FavoritCitys', JSON.stringify(favoritCitys));
    onChangeSity(city);
  }, [favoritCitys, city, onChangeSity]);

  return (
    <HeaderContainer>
      <HeaderForm>
        <SearchForm onSubmit={onSubmit}>
          <GeoBtn type="button" onClick={onGeoClick}>
            <GpsNotFixedIcon
              sx={{
                color: '#494848',
                '&:hover': { cursor: 'pointer', color: '#87b4ce' },
              }}
            />
          </GeoBtn>
          <SearchInput
            value={inputValue}
            type="text"
            placeholder="Enter the city"
            name="query"
            onInput={onHandleChange}
          />
          <AddToFavoriteBtn type="button" onClick={addToFavorit}>
            <StarBorderIcon
              sx={{
                color: '#494848',
                '&:hover': { cursor: 'pointer', color: '#FF6B09' },
              }}
            />
          </AddToFavoriteBtn>
        </SearchForm>
        <FavoritCity
          favoritCitysArr={favoritCitys}
          setFavoritCitys={setFavoritCitys}
          onFavoritCityClick={onFavoritCityClick}
          city={city}
        />
      </HeaderForm>
    </HeaderContainer>
  );
};
