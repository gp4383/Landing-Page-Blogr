const hamburger = document.querySelector('#hamMenu')
const links = document.querySelector('.logo__links .links')

hamburger.addEventListener('click', () => {
    console.log('clicked');
    links.classList.toggle('open')
})