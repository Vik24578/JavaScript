let divisor = document.querySelector(".divisor");

let slider = document.getElementById("slider-range");

function divisorChanged() {
    divisor.style.width = slider.value + "%"
}