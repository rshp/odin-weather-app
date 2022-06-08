import createHeader from './_header';
import createNav from './_nav';
import './_forecast';
import _todaysWeather from './_current';

import getWeatherData from './queryData';
import { createElement } from './utils';

export default (() => {
	const appContainer = createElement('div', 'app');

	function drawWeather(weatherData) {
		appContainer.innerHTML = '';
		const currentWeatherContainer = _todaysWeather(weatherData);
		appContainer.appendChild(currentWeatherContainer);
	}

	function init() {
		const header = createHeader();
		document.body.appendChild(header);

		const nav = createNav();
		document.body.appendChild(nav);

		document.body.appendChild(appContainer);
		// draw loader
		getWeatherData.getWeatherByIP().then((weatherData) => {
			drawWeather(weatherData);
		});
		// query data
		// hide loader
		// draw data
	}

	return { init, drawWeather };
})();
