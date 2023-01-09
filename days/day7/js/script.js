//Search Input
let searchIcon = document.querySelector('.search-icon');
let searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active')
})

//Show & Hide menu toggle
let menuIcon = document.querySelector('.menu-icon');
let panel = document.querySelector('.panel');
let menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    panel.classList.toggle('show-menu');
    menu.classList.toggle('active')
})