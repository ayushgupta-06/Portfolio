
const hamburgerLines = document.querySelectorAll(".lines")
const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")
const container = document.querySelector(".container")
const navbtn = document.querySelectorAll(".navbtn")
const home = document.querySelector("#home")
const about = document.querySelector("#about")

hamburgerLines.forEach(element => {
    element.addEventListener('click',hamburgerLinesClick)
});
function hamburgerLinesClick() {
    hamburger.classList.toggle('active')
    header.classList.toggle('header-active')
    container.classList.toggle('container-active')
}
navbtn.forEach(element => {
    element.addEventListener('click',hamburgerClose)
});
home.addEventListener('click',hamburgerClose)
about.addEventListener('click',hamburgerClose)
function hamburgerClose(){
    hamburger.classList.remove('active')
    header.classList.remove('header-active')
    container.classList.remove('container-active')
}

const quoteArea = document.querySelector(".quote")
const authorArea = document.querySelector(".author") 

fetch("https://api.api-ninjas.com/v1/quotes?category=success",{
    method: 'get',
    headers: {
        'X-Api-Key': 'ZZx6zJkWDDDChVNeJDMHSQ==tJJiKSPxdvi2RATo'
    },
    contentType: 'application/json',
})
.then( res =>{
    return res.json()
})
.then( data =>{
    let author = data[0].author;
    let quote = data[0].quote;
    console.log(author+"\n"+quote)
    quoteArea.innerText = quote;
    authorArea.innerText = "~ "+author;
})
.catch( err =>{
    console.error(err)
})