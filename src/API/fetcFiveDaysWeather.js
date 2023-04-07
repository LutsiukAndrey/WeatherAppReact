import { keys } from './keys';
import axios from 'axios';
import { FilterDays } from './helper';

const { weaterKey } = keys;

const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?`;
const searchParams = new URLSearchParams({
  units: 'metric',
  exclude: 'current',
  lang: 'en',
  appid: weaterKey,
});

export async function fetcFiveDaysWeather(name) {
  const url = `${baseUrl}q=${name}&${searchParams}`;
  try {
    const { data } = await axios.get(url);
    const filteredData = FilterDays(data);
    return filteredData;
  } catch (error) {}
}
