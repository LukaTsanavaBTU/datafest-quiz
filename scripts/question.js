const options = document.querySelectorAll(".answer-div");
const answerButton = document.querySelector("button");
let selectedGender;

options.forEach((option) => {
    option.addEventListener("click", (e) => {
        disableAllDivs();
        option.classList.add("selected");
    });
});

function disableAllDivs() {
    options.forEach((option) => {
        option.classList.remove("selected");
    });
}
