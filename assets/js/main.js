document.addEventListener('keypress', handleStart, { once: true });
const title = document.querySelector('[data-title]');

function handleStart() {
	title.classList.add('hide');
}

function handleLose() {}
