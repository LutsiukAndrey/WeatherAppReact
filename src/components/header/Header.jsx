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

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderForm>
        <SearchForm>
          <GeoBtn type="button">
            <GpsNotFixedIcon />
          </GeoBtn>
          <SearchInput type="text" placeholder="Enter the city" name="query" />
          <FavoriteBtn type="button">
            <StarBorderIcon />
          </FavoriteBtn>
        </SearchForm>
        <FavoritCity />
      </HeaderForm>
    </HeaderContainer>
  );
};
