import { FavoritCityButton } from './FavoritCityBtn.module';
import ClearIcon from '@mui/icons-material/Clear';

export const FavoritCityBtn = ({ name, onDelete }) => {
  return (
    <FavoritCityButton onClick={() => console.log('onFavClick')}>
      {name}
      <ClearIcon
        onClick={() => {
          console.log('sfdsdf');
        }}
        sx={{ fontSize: '10px', marginLeft: 1 }}
      />
    </FavoritCityButton>
  );
};
