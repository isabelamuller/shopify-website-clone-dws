
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

// const searchBar = document.querySelector(".search-bar-container");
// const popUp = document.querySelector(".search-bar-popup");

// searchBar.addEventListener('click', () => {
//    popUp.classList.toggle('show');
// });
// document.addEventListener('click', ({
//    target
// }) => {
//    if (target.matches('.search-bar-container') === false) {
//       popUp.classList.remove('show');
//    }
// });


// $("#search-bar-container").click(function() {
//    $("#search-bar-popup").toggle("show");
// })


function openSideNav() {
   let sideNavElement = document.getElementById("side-nav");
   let teste = document.getElementById("side-nav-mobile-top");
   let pcNav = document.getElementById("navbar");
   let teste2 = document.getElementById('side-nav-menu-container');
   let teste3 = document.body;
   console.log(teste)
   teste2.style.display = 'flex';
   sideNavElement.style.width = "100vw";
   sideNavElement.style.height = "100vh";
   teste.style.display = "flex";
   teste.style.width = "100vw";

   sideNavElement.style.display = "inline-block";
   teste3.style.overflow = "hidden";
   // isso ta uma bagunca dsclp KKK
}


const closeSideNav = () => {
   let sideNavElement = document.getElementById("side-nav");
   let teste = document.getElementById("side-nav-mobile-top");
   let pcNav = document.getElementById("navbar");
   let teste2 = document.getElementById('side-nav-menu-container');
   
   teste.style.display = 'none';
   teste2.style.display = 'none';
   sideNavElement.style.width = "0";
   sideNavElement.style.height = "0";
   pcNav.style.display = "flex"
   teste3.style.overflow = "scroll";
}



