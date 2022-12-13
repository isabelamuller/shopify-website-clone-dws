
const dropdownBtnPc = document.getElementById("dropdown-btn");
const dropdownPc = document.getElementById("dropdown");

dropdownBtnPc.addEventListener('click', () => {
   dropdownPc.classList.toggle('open');
})


const moonIcon = document.getElementById("moon-icon");
const moonIconMobile = document.getElementById("moon-icon-mobile");
const sunIcon = document.getElementById("sun-icon");
const sunIconMobile = document.getElementById("sun-icon-mobile");

moonIcon.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
})
moonIconMobile.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
})
sunIconMobile.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
})
sunIcon.addEventListener('click', () => {
   document.body.classList.remove('dark-mode');
})


const popUp = document.getElementById("search-bar-popup");
const searchBar = document.getElementById("search-bar-container");
const searchBarMobile = document.getElementById("magnifying-glass-icon-mobile")
const searchBarIcon = document.getElementById("magnifying-glass-icon-pc")

searchBar.addEventListener('click', () => {
   popUp.classList.toggle('open');
})

searchBarMobile.addEventListener('click', () => {
   popUp.classList.toggle('open');
})

searchBarIcon.addEventListener('click', () => {
   popUp.classList.toggle('open');
})

window.addEventListener('click', (event) => {
   if (event.target === popUp) {
      popUp.classList.remove('open')
   }
}) 


const sideNav = document.getElementsByClassName("side-navbar-mobile")[0];
const hamburgerIcon = document.getElementById("hamburger-icon");
const pcNav = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn-side-nav");

hamburgerIcon.addEventListener('click', () => {
   sideNav.classList.toggle('open');
   pcNav.classList.toggle('close');
   document.body.style.overflow = "hidden"
});

closeBtn.addEventListener('click', () => {
   sideNav.classList.remove('open');
   pcNav.classList.remove('close');
   document.body.style.overflow = "scroll"
})


const menuBtnSideNav = document.getElementById("side-nav-menu-wrapper");
const menuArrow = document.getElementById("arrow-side-nav")
const dropdownMenuSideNav = document.getElementById("side-nav-api-dropdown-container");
const menuUnderTopSideNav = document.getElementById("list-menu-under-top")
const dropdownList = document.getElementById("side-nav-dropdown-list");

menuBtnSideNav.addEventListener('click', () => {
   dropdownMenuSideNav.classList.toggle('open');
   menuArrow.classList.toggle("open");
   menuUnderTopSideNav.classList.toggle('open')
   dropdownList.classList.toggle("open")
})