import create from '../utils/create.js';

const todaysWeatherDataOtherInfoValuesContainer = create({
  tagName: 'div',
  child: [
    create({
      tagName: 'span',
      classNames: 'row px-0 py-0 mx-0 my-0 weather-detail',
      attributes: [
        ['id', 'overcast'],
      ],
    }),
    create({
      tagName: 'span',
      classNames: 'row px-0 py-0 mx-0 my-0 weather-detail',
      attributes: [
        ['id', 'feels-like'],
      ],
    }),
    create({
      tagName: 'span',
      classNames: 'row px-0 py-0 mx-0 my-0 weather-detail',
      attributes: [
        ['id', 'wind'],
      ],
    }),
    create({
      tagName: 'span',
      classNames: 'row px-0 py-0 mx-0 my-0 weather-detail',
      attributes: [
        ['id', 'humidity'],
      ],
    }),

  ],
});

const todaysWeatherDataOtherInfoIcon = create({
  tagName: 'img',
  attributes: [
    ['id', 'todaysWeatherIconContainer'],
  ],
});

const todaysWeatherDataOtherInfoIconContainer = create({
  tagName: 'div',
  child: [
    todaysWeatherDataOtherInfoIcon,
  ],
});

const todaysWeatherDataOtherInfoContainer = create({
  tagName: 'div',
  classNames: 'col-12 col-lg-6',
  child: [
    todaysWeatherDataOtherInfoIconContainer,
    todaysWeatherDataOtherInfoValuesContainer,

  ],
});

const todaysWeatherDataTempValue = create({
  tagName: 'span',
  classNames: 'd-flex justify-content-start px-0',
  attributes: [
    ['id', 'todaysTempContainer'],
  ],
});

const todaysWeatherDataTempValueContainer = create({
  tagName: 'div',
  classNames: 'col-12 col-lg-6',
  child: [
    todaysWeatherDataTempValue,
  ],
});

const todaysWeatherDataContainer = create({
  tagName: 'div',
  classNames: 'row container-fluid',
  child: [
    todaysWeatherDataTempValueContainer,
    todaysWeatherDataOtherInfoContainer,
  ],
});

const todaysWeatherDate = create({
  tagName: 'span',
  classNames: 'align-self-start',
  attributes: [
    ['id', 'date-container'],
  ],
});

const todaysWeatherDateContainer = create({
  tagName: 'div',
  classNames: 'row',
  child: [
    todaysWeatherDate,
  ],
});

const todaysWeatherCity = create({
  tagName: 'span',
  attributes: [
    ['id', 'CityContainer'],
  ],
});

const todaysWeatherCityContainer = create({
  tagName: 'div',
  classNames: 'row',
  child: [
    todaysWeatherCity,
  ],
});

const todaysWeatherContainer = create({
  tagName: 'div',
  child: [
    todaysWeatherCityContainer,
    todaysWeatherDateContainer,
    todaysWeatherDataContainer,
  ],
});

export default todaysWeatherContainer;
