import '../styles/main.scss';
import 'weather-icons/sass/weather-icons.scss';
import getWeatherData from './queryData';

// getWeatherData.getCoordinates('Moscow').then((result) => console.log(result));
getWeatherData.getWeather('London').then((result) => console.log(result));
getWeatherData.getLocationByIP().then((result) => console.log(result));
