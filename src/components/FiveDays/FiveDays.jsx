// import { Navigation } from 'components/Navigation/Navigation';
// import { FiveDaysWeatherItem } from 'components/FiveDays/fiveDaysWeatherItem/fiveDaysWeatherItem';

// import { useState } from 'react';

// import nanoId from 'nano-id';
// import { DetailsItem } from 'components/FiveDays/DetailsItem/DetailsItem';
// import { SliderWeatherList } from 'components/FiveDays/SliderWeatherList/SliderWeatherList';

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import {
//   DetailedListSlider,
//   FiveDaysWeather,
//   Items,
//   Section,
//   ShowChartBtn,
//   SliderBtns,
//   Title,
//   WeatherList,
// } from './FiveDays.module';
// import { Chart } from './Chart/Chart';

// export const FiveDays = ({ arr, onSelectBtn }) => {
//   const mob = window.innerWidth <= 768;
//   const tablet = window.innerWidth > 768 && window.innerWidth < 1279;
//   const desctop = window.innerWidth > 1279;

//   const [offset, setOffset] = useState(0);
//   const [showMore, setShowMore] = useState(false);
//   const [index, setIndex] = useState(0);
//   const [weatherListOffset, setWeatherListOffset] = useState(0);
//   const [openChart, setOpenChart] = useState(false);

//   const onMoreClick = event => {
//     setIndex(event.target.id);
//     if (index !== event.target.id) {
//       setShowMore(true);
//       return;
//     }
//     if (index === event.target.id) {
//       setShowMore(!showMore);
//       return;
//     }
//   };
//   const onPrevClick = () => {
//     if (offset === 0) {
//       return;
//     }
//     if (mob) {
//       setOffset(prev => (prev -= 137));
//     }
//     if (tablet) {
//       setOffset(prev => (prev -= 129));
//     }
//     if (desctop) {
//     }
//   };

//   const onNextClick = () => {
//     if (mob) {
//       setOffset(prev => (prev += 137));

//       if (offset > 900) {
//         setOffset(0);
//       }
//     }
//     if (tablet) {
//       setOffset(prev => (prev += 129));
//       if (offset > 408) {
//         setOffset(0);
//       }
//     }
//     if (desctop) {
//       setOffset(prev => (prev += 172));
//       if (offset > 168) {
//         setOffset(0);
//       }
//     }
//   };
//   const changeWeaterListOffset = data => {
//     setWeatherListOffset(data);
//   };

//   return (
//     <Section>
//       <Navigation onSelectBtn={onSelectBtn} />
//       {!loading && arr ? (

//       <FiveDaysWeather>
//         <Title>
//           {arr.city}, {arr.country}
//         </Title>
//         <SliderWeatherList cb={changeWeaterListOffset}>
//           <WeatherList style={{ left: `${-weatherListOffset}px` }}>
//             {arr.weatherFiveDays.map(data => {
//               return (
//                 <FiveDaysWeatherItem
//                   index={arr.weatherFiveDays.indexOf(data)}
//                   key={nanoId()}
//                   data={data}
//                   onMoreClick={onMoreClick}
//                 />
//               );
//             })}
//           </WeatherList>
//         </SliderWeatherList>

//         {showMore ? (
//           <>
//             <DetailedListSlider>
//               <Items style={{ left: `${-offset}px` }}>
//                 {arr.weatherFiveDays[index].forecast.map(data => {
//                   return <DetailsItem key={nanoId()} data={data} />;
//                 })}
//               </Items>
//             </DetailedListSlider>
//             {/* {window.innerWidth > 768 ? ( */}
//             <SliderBtns>
//               <ArrowBackIosIcon
//                 onClick={onPrevClick}
//                 fontSize="8px"
//                 sx={{ color: '#ffffff' }}
//               />
//               <ArrowForwardIosIcon
//                 onClick={onNextClick}
//                 fontSize="8px"
//                 sx={{ color: '#ffffff' }}
//               />
//             </SliderBtns>
//           </>
//         ) : (
//           <></>
//         )}
//       </FiveDaysWeather>
//       {openChart || (
//         <ShowChartBtn onClick={() => setOpenChart(!openChart)}>
//           Show charts
//         </ShowChartBtn>
//       )}
//       {!openChart || (
//         <Chart setOpenChart={setOpenChart} openChart={openChart} data={arr} />
//       )}
//       ):<></> }
//     </Section>
//   );
// };

import { Navigation } from 'components/Navigation/Navigation';
import { FiveDaysWeatherItem } from 'components/FiveDays/fiveDaysWeatherItem/fiveDaysWeatherItem';
import { useState } from 'react';
import nanoId from 'nano-id';
import { DetailsItem } from 'components/FiveDays/DetailsItem/DetailsItem';
import { SliderWeatherList } from 'components/FiveDays/SliderWeatherList/SliderWeatherList';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  DetailedListSlider,
  FiveDaysWeather,
  Items,
  Section,
  ShowChartBtn,
  SliderBtns,
  Title,
  WeatherList,
} from './FiveDays.module';
import { Chart } from './Chart/Chart';

export const FiveDays = ({ arr, onSelectBtn }) => {
  const mob = window.innerWidth <= 768;
  const tablet = window.innerWidth > 768 && window.innerWidth < 1279;
  const desctop = window.innerWidth > 1279;

  const [offset, setOffset] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [index, setIndex] = useState(0);
  const [weatherListOffset, setWeatherListOffset] = useState(0);
  const [openChart, setOpenChart] = useState(false);

  const onMoreClick = event => {
    const { id } = event.target;
    setIndex(id);
    setShowMore(index !== id || !showMore);
  };

  const onPrevClick = () => {
    if (offset === 0) return;
    if (mob) setOffset(prev => prev - 137);
    if (tablet) setOffset(prev => prev - 129);
  };

  const onNextClick = () => {
    if (mob) setOffset(prev => (prev + 137) % 901);
    if (tablet) setOffset(prev => (prev + 129) % 409);
    if (desctop) setOffset(prev => (prev + 172) % 169);
  };

  const changeWeatherListOffset = data => {
    setWeatherListOffset(data);
  };

  return (
    <Section>
      <Navigation onSelectBtn={onSelectBtn} />
      <FiveDaysWeather>
        {!arr ? (
          <h3 style={{ color: '#fff' }}>City is not found</h3>
        ) : (
          <>
            <Title>{`${arr.city}, ${arr.country}`}</Title>
            <SliderWeatherList cb={changeWeatherListOffset}>
              <WeatherList style={{ left: `${-weatherListOffset}px` }}>
                {arr.weatherFiveDays.map(data => (
                  <FiveDaysWeatherItem
                    index={arr.weatherFiveDays.indexOf(data)}
                    key={nanoId()}
                    data={data}
                    onMoreClick={onMoreClick}
                  />
                ))}
              </WeatherList>
            </SliderWeatherList>
            {showMore && (
              <>
                <DetailedListSlider>
                  <Items style={{ left: `${-offset}px` }}>
                    {arr.weatherFiveDays[index].forecast.map(data => (
                      <DetailsItem key={nanoId()} data={data} />
                    ))}
                  </Items>
                </DetailedListSlider>
                <SliderBtns>
                  <ArrowBackIosIcon
                    onClick={onPrevClick}
                    fontSize="8px"
                    sx={{ color: '#ffffff' }}
                  />
                  <ArrowForwardIosIcon
                    onClick={onNextClick}
                    fontSize="8px"
                    sx={{ color: '#ffffff' }}
                  />
                </SliderBtns>
              </>
            )}
          </>
        )}
      </FiveDaysWeather>
      {!arr ? (
        <></>
      ) : (
        <>
          {!openChart && (
            <ShowChartBtn onClick={() => setOpenChart(!openChart)}>
              Show charts
            </ShowChartBtn>
          )}
        </>
      )}
      {openChart && (
        <Chart setOpenChart={setOpenChart} openChart={openChart} data={arr} />
      )}
    </Section>
  );
};
