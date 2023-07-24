import { FavoritCityButton } from 'components/header/FavoritCity/FavoritCity.module';
import ClearIcon from '@mui/icons-material/Clear';
import nanoId from 'nano-id';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const FavoritCity = ({
  setFavoritCitys,
  favoritCitysArr,
  onFavoritCityClick,
}) => {
  const favoritButtonsSettings = {
    // centerPadding: 20,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
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

  const onDeleteClick = name => {
    const updatedFavoritCitysArr = favoritCitysArr.filter(
      cityName => cityName !== name
    );
    localStorage.setItem(
      'FavoritCitys',
      JSON.stringify(updatedFavoritCitysArr)
    );
    setFavoritCitys(updatedFavoritCitysArr);
  };

  return (
    <>
      <Slider {...favoritButtonsSettings}>
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
                onClick={e => {
                  e.stopPropagation();
                  onDeleteClick(name);
                }}
                sx={{
                  fontSize: '15px',
                  position: 'absolute',
                  top: '50%',
                  right: '5px',
                  transform: 'translate(-50%, -50%)',
                  '&:hover': {
                    cursor: 'pointer',
                    color: '#FF6B09',
                  },
                  // transform: 'transla'
                }}
              />
            </FavoritCityButton>
          );
        })}
      </Slider>
    </>
  );
};
