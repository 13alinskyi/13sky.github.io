document.addEventListener('DOMContentLoaded', () => {
    // Initial page load animation
    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add({
        targets: '.nav-wrapper',
        width: ['0px', '1000px'],
    })
    .add({
        targets:'.logo',
        width: ['0px', '230px'],
        offset: '-=500',
    })
    .add({
        targets: '.logo h1, nav a',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: (el, i) => 100 * i,
        offset: '-=700',
    })
    .add({
        targets: '.text-section',
        translateY: [100, 0],
        opacity: [0, 1],
        offset: '-=700',
    })
    .add({
        targets: '.image-section',
        translateY: [-100, 0],
        opacity: [0, 1],
        offset: '-=1000',
    })
    .add({
        targets: '.ham-line',
        trabslateX: [500,0],
        opacity: [0, 1],
        delay: (el, i) => 100 * i,
        offset: '-=700',
    })
    .add({
        targets: '.social a',
        translateX: [500, 0],
        opacity: [0, 1],
        delay: (el, i) => 200 * i,
        offset: '-=1000',
    })
})