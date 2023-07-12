
const hamburgerLines = document.querySelectorAll(".lines")
const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")
const navbar = document.querySelector(".navbar")
hamburgerLines.forEach(element => {
    element.addEventListener('click',hamburgerLinesClick)
});
function hamburgerLinesClick() {
    hamburger.classList.toggle('active')
    header.classList.toggle('header-active')
    navbar.classList.toggle('nav-active')
}