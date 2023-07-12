
const hamburgerLines = document.querySelectorAll(".lines")
const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")
const container = document.querySelector(".container")
hamburgerLines.forEach(element => {
    element.addEventListener('click',hamburgerLinesClick)
});
function hamburgerLinesClick() {
    hamburger.classList.toggle('active')
    header.classList.toggle('header-active')
    container.classList.toggle('container-active')
}