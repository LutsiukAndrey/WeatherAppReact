import { keys } from './keys';
import axios from 'axios';

const { weaterKey } = keys;

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;
const searchParams = new URLSearchParams({
  units: 'metric',
  exclude: 'current',
  lang: 'en',
  appid: weaterKey,
});

export async function fetchWeatherToday(name) {
  const url = `${baseUrl}q=${name}&${searchParams}`;
  try {
    const data = await axios.get(url);
    return data;
  } catch (error) {
    return 'lviv';
  }
}
