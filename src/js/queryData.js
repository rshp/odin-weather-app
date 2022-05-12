export default (() => {
	const API_KEY = '99bb28ddc7a1edd5945358f2000facb6';

	async function getCoordinates(cityName) {
		const RESULTS_LIMIT = 1;
		const geocodingCallString = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${RESULTS_LIMIT}&appid=${API_KEY}`;
		try {
			const response = await fetch(geocodingCallString, { mode: 'cors' });
			const dataObject = await response.json();
			if (!dataObject.length) throw new Error('Invalid search result');
			return dataObject[0];
		} catch (error) {
			console.error(error);
			return {};
		}
	}

	async function getWeather(cityName) {
		const cityData = await getCoordinates(cityName);
		try {
			const oneCallString = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.lon}&exclude=minutely,alerts&appid=${API_KEY}`;
			const response = await fetch(oneCallString, { mode: 'cors' });
			const dataObject = await response.json();
			return dataObject;
		} catch (error) {
			console.error(error);
			return {};
		}
	}

	async function getLocationByIP() {
		try {
			const APICallString = `https://ipapi.co/json/`;
			const response = await fetch(APICallString, { mode: 'cors' });
			const dataObject = await response.json();
			return dataObject;
		} catch (error) {
			console.error(error);
			return {};
		}
	}

	return { getCoordinates, getWeather, getLocationByIP };
})();
