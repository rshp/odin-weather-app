import { createHeaderIcon, createElement } from './utils';
import openWeatherIcon from '../assets/icon/openweather-logo.png';
import githubIcon from '../assets/icon/github-logo.svg';
import odinIcon from '../assets/icon/odin-logo.svg';

export default () => {
	const header = createElement('header');
	const headerTitle = createElement('p', 'header__title');
	headerTitle.textContent = 'Weather App';
	header.appendChild(headerTitle);

	createHeaderIcon(header, openWeatherIcon, 'https://openweathermap.org/');
	createHeaderIcon(header, odinIcon, 'https://www.theodinproject.com/');
	createHeaderIcon(header, githubIcon, 'https://github.com/rshp');
	return header;
};
