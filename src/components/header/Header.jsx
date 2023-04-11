import StarBorderIcon from '@mui/icons-material/StarBorder';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import {
  HeaderContainer,
  HeaderForm,
  SearchInput,
  SearchForm,
  FavoriteBtn,
  GeoBtn,
} from './Header.module';
import { FavoritCity } from 'components/header/FavoritCity/FavoritCity';
import { useState } from 'react';
import { useEffect } from 'react';
import { geoLocationByCoords } from 'API/fetchLocationByCoords';

export const Header = ({ onChangeSity }) => {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('Kyiv');
  const [favoritCitys, setFavoritCitys] = useState(() => {
    const localStoregeFavoritCitys = localStorage.getItem('FavoritCitys');
    const parsedFavoritCitys = JSON.parse(localStoregeFavoritCitys);
    if (parsedFavoritCitys && parsedFavoritCitys.length) {
      return parsedFavoritCitys;
    }
    return [];
  });

  const onSubmit = event => {
    event.preventDefault();
    if (inputValue) {
      setCity(inputValue);
      setInputValue(inputValue);
    }

    return;
  };

  const onHandleChange = event => {
    setInputValue(event.target.value);
  };
  const addToFavorit = () => {
    if (favoritCitys.includes(city)) {
      return;
    }
    const normolizedValue = city.trim().replace(city[0], city[0].toUpperCase());
    setFavoritCitys(prev => [...prev, normolizedValue]);
  };
  const onDeleteClick = name => {
    console.log(name);
    const index = favoritCitys.indexOf(name);
    favoritCitys.splice(index, 1);
    localStorage.setItem('FavoritCitys', JSON.stringify(favoritCitys));
  };
  const onFavoritCityClick = name => {
    setCity(name);
    setInputValue(name);
  };
  const onGeoClick = s => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const { latitude, longitude } = coords;

      const resolt = await geoLocationByCoords(latitude, longitude);
      setCity(resolt);
      setInputValue(resolt);
    });
  };
  useEffect(() => {
    localStorage.setItem('FavoritCitys', JSON.stringify(favoritCitys));
  }, [favoritCitys]);

  useEffect(() => {
    onChangeSity(city);
  }, [city, onChangeSity]);

  return (
    <HeaderContainer>
      <HeaderForm>
        <SearchForm onSubmit={onSubmit}>
          <GeoBtn type="button">
            <GpsNotFixedIcon onClick={onGeoClick} color="primary" />
          </GeoBtn>
          <SearchInput
            value={inputValue}
            type="text"
            placeholder="Enter the city"
            name="query"
            onInput={onHandleChange}
          />
          <FavoriteBtn type="button" onClick={addToFavorit}>
            <StarBorderIcon />
          </FavoriteBtn>
        </SearchForm>
        <FavoritCity
          favoritCitysArr={favoritCitys}
          onFavoritCityClick={onFavoritCityClick}
          onDeleteClick={onDeleteClick}
        />
      </HeaderForm>
    </HeaderContainer>
  );
};
//TODO запрет на добавление дефолтного города
// при нажатии на делейт всплывет кнопка фейворит
//сделать гео
// сделать ховер
