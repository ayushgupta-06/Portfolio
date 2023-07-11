const sliderOption = document.querySelector('.slider-option')
const slider = document.querySelector('.slider')
const arrow = document.querySelector('.arrow')
sliderOption.onclick = () =>{
    slider.classList.toggle("active")
    sliderOption.classList.toggle("active")
}
