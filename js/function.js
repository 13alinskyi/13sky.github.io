document.addEventListener('DOMContentLoaded', () => {
	// Navigation links hover
	let navLinks = document.querySelectorAll('nav a, .social a, .title');

	navLinks.forEach((navLink) => {
		navLink.addEventListener('mouseenter', () => {
			let letter = navLink.querySelectorAll('.letter');
			anime.remove(letter);
			anime.timeline({
				targets: letter,
			})
			.add({
				translateX: [0, -30],
				opacity: [1, 0],
				easing: 'easeInExpo',
				duration: 500,
				delay: (el, i) => 30 * i,
			})
			.add({
				translateX: [40, 0],
				opacity: [0, 1],
				easing: 'easeOutExpo',
				duration: 1100,
				delay: (el, i) => 30 * i,
			})
		})
	})
})
