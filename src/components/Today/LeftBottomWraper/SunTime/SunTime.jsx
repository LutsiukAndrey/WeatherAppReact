import { Sun, SunTimeWraper, SunriseTime, SunsetTime } from './SunTime.module';

export const SunTime = () => {
  return (
    <SunTimeWraper>
      <Sun>
        <SunriseTime>
          <img src="./images/sunrise.png" alt="" className="sun_time-img" />
          <span>07:04</span>
        </SunriseTime>
        <SunsetTime>
          <img src="./images/sunset.png" alt="" className="sun_time-img" />
          <span>17:54</span>
        </SunsetTime>
      </Sun>
    </SunTimeWraper>
  );
};
