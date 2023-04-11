import {
  Date,
  DayName,
  Deg,
  FiveDaysItem,
  Image,
  Min,
  MinOrMax,
  MoreInfo,
} from './fiveDaysWeatherItem.module';

export const FiveDaysWeatherItem = ({ data, onMoreClick, index }) => {
  const { dayName, monthName, dayNum, tempreture, icon } = data;
  return (
    <FiveDaysItem>
      <DayName>{dayName}</DayName>
      <Date>
        <span className="date-num">{dayNum} </span>
        <span className="date-name">{monthName}</span>
      </Date>
      <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <div className="fiveDays__tempreture">
        <MinOrMax>
          <Min>
            <p className="fiveDays__list-temp">min</p>
            <Deg>{tempreture.tempMin}</Deg>
          </Min>
          <li className="fiveDays__weather__list-max">
            <p className="fiveDays__list-temp">max</p>
            <Deg>{tempreture.tempMax}</Deg>
          </li>
        </MinOrMax>
      </div>
      <MoreInfo type="button" id={index} onClick={onMoreClick}>
        more info
      </MoreInfo>
    </FiveDaysItem>
  );
};
