import setKeys from './utils/setKeys.js'
import {
    weekdays,
    months,
    forecast,
} from './ln/resources.js';


export default function updateForcast(data, language, unit) {

    const tempKeys = setKeys(unit);
    const fetchedDate = new Date(data.location.localtime);
    const currentWeekday = weekdays[language][fetchedDate.getDay()].slice(0, 3);
    const currentMonth = months[language][fetchedDate.getMonth()];

    document.getElementById('CityContainer').innerHTML = `${data.location.name}, ${data.location.country}`;
    document.getElementById('date-container').innerHTML = `${currentWeekday} ${fetchedDate.getDate()} ${currentMonth} ${fetchedDate.getHours()}:${data.location.localtime.slice(-2)}`;
    document.getElementById('todaysTempContainer').innerHTML = `${data.current[tempKeys.todayKey]}°`;
    document.getElementById('todaysWeatherIconContainer').src = `${data.current.condition.icon.replace('64x64', '128x128')}`;

    document.getElementById('overcast').innerHTML = `${forecast[language].overcast}`;
    document.getElementById('feels-like').innerHTML = `${forecast[language].feelsLike}: ${data.current[tempKeys.feelsLike]}°`;
    document.getElementById('wind').innerHTML = `${forecast[language].wind}: ${data.current.wind_kph} kp/h`;
    document.getElementById('humidity').innerHTML = `${forecast[language].humidity}: ${data.current.humidity}%`;

    document.getElementById('first-weekday').innerHTML = `${weekdays[language][new Date(data.forecast.forecastday[0].date).getDay()]}`;
    document.getElementById('first-weekday-temp').innerHTML = `${data.forecast.forecastday[0].day[tempKeys.nextDayKey]}°`;
    document.getElementById('first-weekday-icon').src = `${data.forecast.forecastday[0].day.condition.icon}`;

    document.getElementById('second-weekday').innerHTML = `${weekdays[language][new Date(data.forecast.forecastday[1].date).getDay()]}`;
    document.getElementById('second-weekday-temp').innerHTML = `${data.forecast.forecastday[1].day[tempKeys.nextDayKey]}°`;
    document.getElementById('second-weekday-icon').src = `${data.forecast.forecastday[1].day.condition.icon}`;

    document.getElementById('third-weekday').innerHTML = `${weekdays[language][new Date(data.forecast.forecastday[2].date).getDay()]}`;
    document.getElementById('third-weekday-temp').innerHTML = `${data.forecast.forecastday[2].day[tempKeys.nextDayKey]}°`;
    document.getElementById('third-weekday-icon').src = `${data.forecast.forecastday[2].day.condition.icon}`;

}
