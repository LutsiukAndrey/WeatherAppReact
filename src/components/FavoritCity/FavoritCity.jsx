import { FavoritCityWraper } from './FavoritCity.module';
import { FavoritCityButton } from 'components/FavoritCityBtn/FavoritCityBtn.module';
import ClearIcon from '@mui/icons-material/Clear';
import nanoId from 'nano-id';

export const FavoritCity = ({
  favoritCitysArr,
  onFavoritCityClick,
  onDeleteClick,
}) => {
  return (
    <>
      <FavoritCityWraper>
        {favoritCitysArr.map(name => {
          return (
            <FavoritCityButton
              key={nanoId()}
              onClick={() => {
                onFavoritCityClick(name);
              }}
            >
              {name}
              <ClearIcon
                onClick={() => {
                  onDeleteClick(name);
                }}
                sx={{ fontSize: '10px', marginLeft: 1 }}
              />
            </FavoritCityButton>
          );
        })}
      </FavoritCityWraper>
    </>
  );
};
