/* eslint-disable import/prefer-default-export */
function createElement(type, elementClass = undefined) {
	const element = document.createElement(type);
	if (elementClass !== undefined) element.classList.add(elementClass);
	return element;
}

export { createElement };
