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
import { FavoritCity } from 'components/FavoritCity/FavoritCity';
import { useState } from 'react';

export const Header = ({ onHandleSubmit, onHandleChange }) => {
  return (
    <HeaderContainer>
      <HeaderForm>
        <SearchForm onSubmit={onHandleSubmit}>
          <GeoBtn type="button">
            <GpsNotFixedIcon />
          </GeoBtn>
          <SearchInput
            type="text"
            placeholder="Enter the city"
            name="query"
            onInput={onHandleChange}
          />
          <FavoriteBtn type="button">
            <StarBorderIcon />
          </FavoriteBtn>
        </SearchForm>
        <FavoritCity />
      </HeaderForm>
    </HeaderContainer>
  );
};
