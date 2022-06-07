/* eslint-disable import/prefer-default-export */
function createElement(type, elementClass = undefined) {
	const element = document.createElement(type);
	if (elementClass !== undefined) element.classList.add(elementClass);
	return element;
}

function createHeaderIcon(container, iconSrc, href) {
	const anchor = document.createElement('a');
	anchor.href = href;
	const icon = new Image();
	icon.src = iconSrc;
	icon.classList.add('header__icon');
	anchor.appendChild(icon);
	container.appendChild(anchor);
}

export { createElement, createHeaderIcon };
