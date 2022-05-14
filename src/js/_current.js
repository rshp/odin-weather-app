import { createElement } from './utils';

export default (weatherData) => {
	const container = createElement('div', 'current-weather__container');
	const location = createElement('p', 'current-weather__location');
	location.textContent = `${weatherData.city}, ${weatherData.country}`;
	const weatherIcon = createElement('i', 'current-weather__icon');
	weatherIcon.classList.add('wi');
	weatherIcon.classList.add(`wi-owm-${weatherData.current.weather[0].id}`);
	const weatherText = createElement('p', 'current-weather__text');
	weatherText.textContent = `${weatherData.current.weather[0].description}`;
	const weatherTemp = createElement('p', 'current-weather__temp');
	weatherTemp.textContent = `${weatherData.current.temp}`;

	container.append(location, weatherIcon, weatherText, weatherTemp);
	console.log(weatherData);
	return container;
};
