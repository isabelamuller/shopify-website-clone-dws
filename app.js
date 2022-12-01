
const dropdownActive = () => {
   let click = document.getElementById("dropdown");
   let menuTitle = document.getElementById("dropdown-btn")
   if (click.style.display === "none") {
      click.style.display = "block";
      menuTitle.style.fontWeight = "600";
   } else {
      click.style.display = "none";
      menuTitle.style.fontWeight = "100"
   }
}

const modeSwitcher = () => {
   let bodyElement = document.body;
   bodyElement.classList.toggle("dark-mode");

}


let popUp = document.getElementsByClassName("search-bar-popup");
let searchBar = document.getElementsByClassName("search-bar-container");
console.log(searchBar)
searchBar.onclick = () => {
   popUp.style.display = "block";
   console.log("ola deus sou eu dnv")
}

window.onclick = (event) => {
   if(event.target === window) {
      popUp.style.display = "none"
   }
}

// const searchBar = document.querySelector(".search-bar-container");
// const popUp = document.querySelector(".search-bar-popup");

searchBar.addEventListener('click', () => {
   console.log("oi")
   popUp.classList.toggle('show');
});
document.addEventListener('click', ({
   target
}) => {
   if (target.matches('.search-bar-container') === false) {
      popUp.classList.remove('show');
   }
});


// $("#search-bar-container").click(function() {
//    $("#search-bar-popup").toggle("show");
// })


function openSideNav() {
   let sideNavElement = document.getElementById("side-nav");
   let teste = document.getElementsByClassName("side-navbar-mobile-top")[0];
   let pcNav = document.getElementsByClassName("navbar")[0];
   let teste2 = document.getElementsByClassName('side-nav-menu-container')[0];
   let teste3 = document.getElementsByClassName('body')[0];
   teste2.style.display = 'flex';
   sideNavElement.style.width = "100vw";
   sideNavElement.style.height = "100vh";
   teste.style.width = "100vw";
   teste.style.display = "flex";
   pcNav.style.display = 'none';
   teste3.style.overflow = "hidden";
}


const closeSideNav = () => {
   let sideNavElement = document.getElementById("side-nav");
   let teste = document.getElementsByClassName("side-navbar-mobile-top")[0];
   let pcNav = document.getElementsByClassName("navbar")[0];
   let teste2 = document.getElementsByClassName('side-nav-menu-container')[0];
   let teste3 = document.getElementsByClassName('body')[0];
   teste.style.display = 'none';
   teste2.style.display = 'none';
   sideNavElement.style.width = "0";
   sideNavElement.style.height = "0";
   pcNav.style.display = "flex"
   teste3.style.overflow = "scroll";
}



