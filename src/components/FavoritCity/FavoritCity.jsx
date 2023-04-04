import { FavoritCityBtn } from 'components/FavoritCityBtn/FavoritCityBtn';
import { FavoritCityWraper } from './FavoritCity.module';

export const FavoritCity = ({ children }) => {
  return (
    <>
      <FavoritCityWraper>
        <FavoritCityBtn name={'sdfasdf'} />
        <FavoritCityBtn name={'sdfasdf'} />
        <FavoritCityBtn name={'sdfasdf'} />
        <FavoritCityBtn name={'sdfasdf'} />
        <FavoritCityBtn name={'sdfasdf'} />
        <FavoritCityBtn name={'sdfasdf'} />
      </FavoritCityWraper>
    </>
  );
};
