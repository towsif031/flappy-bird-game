const birdElem = document.querySelector('[data-bird]');

export function updateBird(delta) {
	console.log(getTop());
}

function setTop(top) {
	birdElement.style.setProperty('--bird-top', top);
}

function getTop() {
	return getComputedStyle(birdElem).getPropertyValue('--bird-top');
}
