/* eslint-disable no-use-before-define */
/* eslint-disable comma-dangle */
import { createElement } from './utils';

export default (weatherData) => {
	const container = createElement('div', 'current-weather');

	const location = createElement('p', 'current-weather__location');
	location.textContent = `${weatherData.city}, ${weatherData.country}`;

	const weatherIcon = createElement('i', 'current-weather__icon');
	weatherIcon.classList.add('wi');
	weatherIcon.classList.add(`wi-owm-${weatherData.current.weather[0].id}`);

	const weatherText = createElement('p', 'current-weather__text');
	weatherText.textContent = `${weatherData.current.weather[0].description}`;

	const weatherTemp = createElement('p', 'current-weather__temp');
	weatherTemp.textContent = `${weatherData.current.temp}`;
	const detailsButton = createElement(
		'div',
		'current-weather__details-button'
	);
	container.append(
		location,
		weatherIcon,
		weatherText,
		weatherTemp,
		detailsButton
	);

	const weatherDetails = createElement(
		'div',
		'current-weather__details-container'
	);

	const humidity = createDetail(
		'wi-humidity',
		'humidity',
		`${weatherData.current.humidity}%`
	);

	const feelsLike = createDetail(
		'wi-thermometer',
		'feels like',
		`${weatherData.current.feels_like}`
	);

	const wind = createDetail(
		'wi-strong-wind',
		'wind',
		`${weatherData.current.wind_speed}`
	);

	weatherDetails.append(humidity, feelsLike, wind);
	container.appendChild(weatherDetails);

	return container;
};

function createDetail(iconClass, text, value) {
	const detailContainer = createElement(
		'div',
		'current-weather__detail-item'
	);
	const detailIcon = createElement('i', 'current-weather__detail-icon');
	detailIcon.classList.add('wi');
	detailIcon.classList.add(iconClass);

	const detailText = createElement('p', 'current-weather__detail-text');
	detailText.textContent = text;

	const detailValue = createElement('p', 'current-weather__detail-value');
	detailValue.textContent = value;

	detailContainer.append(detailIcon, detailText, detailValue);
	return detailContainer;
}
