
const hamburgerLines = document.querySelectorAll(".lines")
const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")
const container = document.querySelector(".container")
const navbtn = document.querySelectorAll(".navbtn")
hamburgerLines.forEach(element => {
    element.addEventListener('click',hamburgerLinesClick)
});
function hamburgerLinesClick() {
    hamburger.classList.toggle('active')
    header.classList.toggle('header-active')
    container.classList.toggle('container-active')
}
navbtn.forEach(element => {
    element.addEventListener('click',navbtnClick)
});
function navbtnClick(){
    hamburger.classList.remove('active')
    header.classList.remove('header-active')
    container.classList.remove('container-active')
}