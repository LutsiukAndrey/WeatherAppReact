import { FavoritCityButton } from 'components/header/FavoritCity/FavoritCity.module';
import ClearIcon from '@mui/icons-material/Clear';
import nanoId from 'nano-id';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const FavoritCity = ({
  favoritCitysArr,
  onFavoritCityClick,
  onDeleteClick,
}) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
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
      </Slider>
    </>
  );
};
