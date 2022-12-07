
const dropdownBtnPc = document.getElementById("dropdown-btn");
const dropdownPc = document.getElementById("dropdown");

dropdownBtnPc.addEventListener('click', () => {
   dropdownPc.classList.toggle('open');
})



const modeSwitcher = () => {
   let bodyElement = document.body;
   bodyElement.classList.toggle("dark-mode");

}

let popUp = document.getElementById("search-bar-popup");
let searchBar = document.getElementById("search-bar-container");
let searchBarMobile = document.getElementById("magnifying-glass-icon-mobile")
let searchBarIcon = document.getElementById("magnifying-glass-icon-pc")

searchBar.onclick = () => {
   popUp.style.display = "block";
}

searchBarMobile.onclick = () => {
   popUp.style.display = "block";
}
searchBarIcon.onclick = () => {
   popUp.style.display = "block";
}

window.onclick = (event) => {
   if (event.target === popUp) {
      popUp.style.display = "none"
   }
}


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

menuBtnSideNav.addEventListener('click', () => {
   dropdownMenuSideNav.classList.toggle('open');
   menuArrow.classList.toggle("open");
   menuBtnSideNav.classList.toggle('open');
})