import { useEffect, useState } from 'react';

const AddRemoveFavoritCity = () => {
  // const addedFavoritCity = localStorage.getItem('Favorit city');
  // const parsedCityArr = JSON.parse(addedFavoritCity);
  // const [favoritCitysArr, setFavoritCitysArr] = useState(null);

  useEffect(() => {
    // if (parsedCityArr) {
    //   setFavoritCitysArr = [...parsedCityArr];
    // }
    // setFavoritCitysArr(prev => [...prev, name]);
    // localStorage.setItem('Favorit city', JSON.stringify(favoritCitys));
  }, []);
  //   if (!favoritCitys.includes(name)) {
  // renderFavoritBtn(favoritCitys);
  //     return;
  //   } else {
  //     const index = favoritCitys.indexOf(name);
  //     favoritCitys.splice(index, 1);
  //     localStorage.setItem('Favorit city', JSON.stringify(favoritCitys));
  //     // renderFavoritBtn(favoritCitys);
  //   }
};
export const addFavoritCity = name => {
  console.log(name);
};
