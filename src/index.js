import FancyApp from './js/FancyApp.js';
import { get } from './js/storage.js';


const lang = get('fancyWeatherLang', '"EN"');
const unit = get('fancyWeatherUnit', '"C"');

window.SpeechRecognition = window.SpeechRecognition ||
                            window.webkitSpeechRecognition; 

new FancyApp(lang, unit).init().addListeners();
