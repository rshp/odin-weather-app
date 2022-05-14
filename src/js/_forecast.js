import { createElement } from './utils';

export default () => {
	const forcastContainer = createElement('div', 'forcast');
	// eslint-disable-next-line operator-linebreak
	forcastContainer.textContent =
		'THis is forcast container, it will have forcast(probably)';
	return forcastContainer;
};
