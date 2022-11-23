const dropdownActive = () => {
    let click = document.getElementById("dropdown");
    let menuTitle = document.getElementById("dropdown-btn")
    if(click.style.display ==="none") {
       click.style.display ="block";
       menuTitle.style.fontWeight="600";
    } else {
       click.style.display ="none";
       menuTitle.style.fontWeight="100"
    } 
 }

 const modeSwitcher = () => {
    let bodyElement = document.body;
    let navbarElement = document.getElementsByClassName("navbar")
    bodyElement.classList.toggle("dark-mode");
 }
