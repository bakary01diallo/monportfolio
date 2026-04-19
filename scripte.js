// Animation de fondu sur le titre au chargement
window.addEventListener('DOMContentLoaded', () => {
	const titre = document.querySelector('header h1');
	if (titre) {
		titre.style.opacity = 0;
		titre.style.transition = 'opacity 1.5s';
		setTimeout(() => {
			titre.style.opacity = 1;
		}, 300);
	}

	
});