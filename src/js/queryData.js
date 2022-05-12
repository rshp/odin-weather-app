export default (() => {
	const API_KEY = '99bb28ddc7a1edd5945358f2000facb6';

	async function getCoordinates(cityName) {
		const RESULTS_LIMIT = 1;
		const geocodingCallString = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${RESULTS_LIMIT}&appid=${API_KEY}`;
		try {
			const response = await fetch(geocodingCallString, { mode: 'cors' });
			const dataObject = await response.json();
			if (!dataObject.length) throw new Error('Invalid search result');
			return {
				city: dataObject[0].name,
				country: dataObject[0].country,
				longitude: dataObject[0].lon,
				latitude: dataObject[0].lat,
			};
		} catch (error) {
			console.error(error);
			return {};
		}
	}

	async function getLocationByIP() {
		try {
			const APICallString = 'https://ipapi.co/json/';
			const response = await fetch(APICallString, { mode: 'cors' });
			const dataObject = await response.json();
			return {
				city: dataObject.city,
				country: dataObject.country_name,
				longitude: dataObject.longitude,
				latitude: dataObject.latitude,
			};
		} catch (error) {
			console.error(error);
			return {};
		}
	}

	async function getWeather(location) {
		try {
			if (Object.keys(location).length === 0) {
				throw new Error('Location invalid');
			}
			const oneCallString = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely,alerts&appid=${API_KEY}`;
			const response = await fetch(oneCallString, { mode: 'cors' });
			const dataObject = await response.json();
			return dataObject;
		} catch (error) {
			console.error(error);
			return {};
		}
	}

	async function getWeatherByCity(cityName) {
		const location = await getCoordinates(cityName);
		const weather = await getWeather(location);
		return { ...weather, ...location };
	}

	async function getWeatherByIP() {
		const location = await getLocationByIP();
		const weather = await getWeather(location);
		return { ...weather, ...location };
	}

	return {
		getCoordinates,
		getWeather,
		getLocationByIP,
		getWeatherByCity,
		getWeatherByIP,
	};
})();
