import searchWeather from './weather.js';
import getLocation from './geolocation.js';
import getImages from './images.js';
import updateMap from './map.js';
import updateForcast from './forecast.js';
import main from './structure/index.js';
import {
  set,
  get
} from './storage.js';
import {
  htmlReference,
  cssReference
} from './utils/htmlCss.js';

export default class FancyApp {
  constructor(language, unit) {
    this.language = language;
    this.unit = unit;

    window.SpeechRecognition = window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;

  }

  init() {
    getLocation()
      .then(location => {
        console.log('loc', location.city)
        searchWeather(location.city, this.language, this.unit)
        .then(weather => {
          console.log('weth', weather)
          set('fancyWeatherForecast', weather);
          getImages(weather.current.condition.text, weather.location.name);
          updateMap(weather.location.lon, weather.location.lat, this.language);
          updateForcast(weather, this.language, this.unit);
        })
      })


    document.body.prepend(main);

    if (this.unit === 'C') {
      document.getElementById(htmlReference.fButton).classList.remove(cssReference.selected);
      document.getElementById(htmlReference.cButton).classList.add(cssReference.selected);
    } else {
      document.getElementById(htmlReference.fButton).classList.add(cssReference.selected);
      document.getElementById(htmlReference.cButton).classList.remove(cssReference.selected);
    }
    return this;
  }

  addListeners() {
    const setQuery = (e) => {
      if (e.keyCode === 13) {
        searchWeather(searchBox.value, this.language, this.unit)
          .then(weather => {
            set('fancyWeatherForecast', weather);
            getImages(weather.current.condition.text, weather.location.name);
            updateMap(weather.location.lon, weather.location.lat, this.language);
            updateForcast(weather, this.language, this.unit);
          })
          .catch(error => console.log('Provide valid adress'))
        searchBox.value = '';
      }
    };

    const setClick = () => {
      if (searchBox.value !== '') {
        searchWeather(searchBox.value, this.language, this.unit)
          .then(weather => {
            set('fancyWeatherForecast', weather);
            getImages(weather.current.condition.text, weather.location.name);
            updateMap(weather.location.lon, weather.location.lat, this.language);
            updateForcast(weather, this.language, this.unit);
          })
        searchBox.value = '';
      }
    };

    const changeEN = () => {
      if (this.language !== 'EN') {
        set('fancyWeatherLang', 'EN');
        this.language = 'EN';
        document.querySelector(htmlReference.dropdownToggle).innerHTML = 'EN';
        updateMap(get('fancyWeatherForecast').location.lon, get('fancyWeatherForecast').location.lat, this.language);
        updateForcast(get('fancyWeatherForecast'), this.language, this.unit);
      }
    };

    const changeRU = () => {
      if (this.language !== 'RU') {
        set('fancyWeatherLang', 'RU');
        this.language = 'RU';
        document.querySelector(htmlReference.dropdownToggle).innerHTML = 'RU';
        updateMap(get('fancyWeatherForecast').location.lon, get('fancyWeatherForecast').location.lat, this.language);
        updateForcast(get('fancyWeatherForecast'), this.language, this.unit);
      }
    };

    const refreshImages = () => {
      const query = get('fancyWeatherForecast');
      getImages(query.current.condition.text, query.location.name);
    };

    const setCelcius = () => {
      if (this.unit !== 'C') {
        this.unit = 'C';
        set('fancyWeatherUnit', 'C');
        document.getElementById(htmlReference.fButton).classList.remove(cssReference.selected);
        document.getElementById(htmlReference.cButton).classList.add(cssReference.selected);
        updateForcast(get('fancyWeatherForecast'), this.language, this.unit);
      }
    };

    const setFahrenheit = () => {
      if (this.unit !== 'F') {
        this.unit = 'F';
        document.getElementById(htmlReference.fButton).classList.add(cssReference.selected);
        document.getElementById(htmlReference.cButton).classList.remove(cssReference.selected);
        set('fancyWeatherUnit', 'F');
        updateForcast(get('fancyWeatherForecast'), this.language, this.unit);
      }
    };

    const listenCity = () => {
      this.recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        if (e.results[0].isFinal) {
          console.log(transcript);
          searchBox.value = transcript;
        }
      });
      this.recognition.addEventListener('end', () => {
        setTimeout(() => {
          searchWeather(searchBox.value, this.language, this.unit)
          .then(weather => {
            set('fancyWeatherForecast', weather);
            getImages(weather.current.condition.text, weather.location.name);
            updateMap(weather.location.lon, weather.location.lat, this.language);
            updateForcast(weather, this.language, this.unit);
          })
          .catch(error => console.log('Provide valid adress'))
        searchBox.value = '';
        }, 2000)
      });
      this.recognition.start();
    }

    const searchBox = document.getElementById(htmlReference.searchInput);
    const searchButton = document.getElementById(htmlReference.searchButton);
    const langEngButton = document.getElementById(htmlReference.langEN);
    const langRusButton = document.getElementById(htmlReference.langRU);
    const imageButton = document.getElementById(htmlReference.imageButton);
    const fButton = document.getElementById(htmlReference.fButton);
    const cButton = document.getElementById(htmlReference.cButton);
    const speechButton = document.getElementById(htmlReference.speechButton);

    searchButton.addEventListener('click', setClick);
    searchBox.addEventListener('keypress', setQuery);
    langEngButton.addEventListener('click', changeEN);
    langRusButton.addEventListener('click', changeRU);
    imageButton.addEventListener('click', refreshImages);
    fButton.addEventListener('click', setFahrenheit);
    cButton.addEventListener('click', setCelcius);
    speechButton.addEventListener('click', listenCity)
  }
}
