// Load new page content via .fetch(), when link is clicked and animate it
let authenticLink = document.querySelector('#authentic-link');
let personalLink = document.querySelector('#personal-link');
let emotionsLink = document.querySelector('#emotions-link');

let linkArray = [authenticLink, personalLink, emotionsLink];

linkArray.forEach((eachLink) => {
    eachLink.addEventListener('click', () => {
        switch (eachLink) {
            case authenticLink:
                fetchPage(eachLink, 'authentic.html');
                break;

            case personalLink:
                fetchPage(eachLink, 'personal.html');
                break;

            case emotionsLink:
                fetchPage(eachLink, 'emotions.html');
        }
    })
}) 
function fetchPage(Link, page) {
    let baseURL = '${window.location.protocol}//${window.location.hostname}';
    
    if (window.loaction.port) {
        baseURL += ':${window.loaction.port}';
    } 
    fetch('${baseURL}/${page}')
    .then((response) => {
        return response.text()
    })
    .then(() => {
        let doc = new DOMParser().parseFromString(html, 'text/html');

        anime({
            targets: '.text-section h1, .text-section p, .text-section div',
            translateX: 700,
            opacity: 0,
            easing: easeInExpo,
            duration: 700,
            complete: (anim) => {
                document.querySelector()
            }
        })
    })
}