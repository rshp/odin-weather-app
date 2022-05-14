import createHeader from './_header';
import './_forecast';
import _todaysWeather from './_current';

import getWeatherData from './queryData';
import { createElement } from './utils';

export default (() => {
	function init() {
		const header = createHeader();
		document.body.appendChild(header);
		const appContainer = createElement('div', 'app');
		document.body.appendChild(appContainer);
		// draw loader
		getWeatherData.getWeatherByIP().then((weatherData) => {
			const currentWeatherContainer = _todaysWeather(weatherData);
			appContainer.appendChild(currentWeatherContainer);
		});
		// query data
		// hide loader
		// draw data
	}
	return { init };
})();
