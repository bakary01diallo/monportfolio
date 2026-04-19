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

	// Animation d'apparition des sections au scroll
	const sections = document.querySelectorAll('main section');
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, { threshold: 0.2 });
	sections.forEach(section => {
		section.classList.add('invisible');
		observer.observe(section);
	});
});