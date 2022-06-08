/* eslint-disable operator-linebreak */
import { createElement } from './utils';
import getWeatherData from './queryData';
import render from './render';

function handleFormSubmit(e) {
	e.preventDefault();
	const inputValue = e.target.querySelector('.nav__search').value;
	console.log(inputValue);
	getWeatherData.getWeatherByCity(inputValue).then((weatherData) => {
		render.drawWeather(weatherData);
	});
}

export default () => {
	const nav = document.createElement('nav');

	const searchContainer = createElement('div', 'nav__search-container');
	const magnifyIcon = createElement('span', 'nav__search-icon');
	magnifyIcon.innerHTML =
		'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>';
	const submitButton = createElement('button', 'nav__search-submit');
	submitButton.setAttribute('type', 'submit');
	submitButton.innerHTML =
		'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" /></svg>';

	const searchField = createElement('input', 'nav__search');
	searchField.setAttribute('type', 'text');
	searchField.setAttribute('required', '');
	searchContainer.appendChild(magnifyIcon);

	searchContainer.appendChild(submitButton);

	const form = document.createElement('form');
	form.classList.add('nav__form');
	form.appendChild(searchField);
	form.appendChild(submitButton);
	form.addEventListener('submit', handleFormSubmit);

	searchContainer.appendChild(form);
	nav.appendChild(searchContainer);
	return nav;
};
