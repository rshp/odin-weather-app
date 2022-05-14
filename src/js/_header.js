import { createElement } from './utils';

export default () => {
	const header = createElement('header');
	header.textContent = 'THis is header, icons be here.';
	return header;
};
