import 'react-clock/dist/Clock.css';
import {
  Day,
  DayEnding,
  MonthCurrent,
  MonthName,
  Timer,
} from './DateNow.module';
import { useEffect, useState } from 'react';
import { SunTime } from 'components/SunTime/SunTime';

export const DateNow = () => {
  const [value, setValue] = useState(new Date());
  const [Time, setTime] = useState({});
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    setTime({ days, hours, minutes, seconds });
  }

  useEffect(() => {
    setInterval(() => convertMs(new Date()), 1000);
  }, []);

  return (
    <Timer>
      <Day>
        <span className="day">{value.getDate()}</span>
        <DayEnding>th</DayEnding>
        <p className="day-name">{dayNames[value.getDay()]}</p>
      </Day>
      <MonthCurrent>
        <MonthName>{month[value.getUTCMonth()]}</MonthName>
        <p className="time-now">
          <span className="hour">{Time.hours}</span>:
          <span className="minute">{Time.minutes}</span>:
          <span className="seconds">{Time.seconds}</span>
        </p>
      </MonthCurrent>
    </Timer>
  );
};
