const progress = document.querySelector(".progress-done");
let numberComplete = progress.getAttribute("data-done");
const button = document.querySelector(".btn");
const slider = document.querySelector(".slider");

button.addEventListener("click", tick);

function tick() {
    let width = 0;
    numberComplete = slider.value;


    let count = setInterval(() => {
        if (width != numberComplete) {
            width++;
            progress.style.opacity = "1";
            progress.style.width = width + "%";
            progress.innerHTML = width + "%";
        }
        else {
            clearInterval(count);
        }
    }, 10);
};