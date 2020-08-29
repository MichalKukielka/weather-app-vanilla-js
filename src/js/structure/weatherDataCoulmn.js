import create from '../utils/create.js';
import todaysWeatherContainer from './todaysWeatherContainer.js';
import nextDaysWeatherContainer from './nextDaysWeatherContainer.js';

const weatherDataCoulmn = create({
  tagName: 'div',
  classNames: 'col-12 col-lg-8 weather-data',
  child: [
    todaysWeatherContainer,
    nextDaysWeatherContainer,
  ],
  attributes: [
    ['id', 'weatherDataContainer'],
  ],
});

export default weatherDataCoulmn;
