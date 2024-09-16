const backButton = document.querySelector("#back-button");
const confirmButton = document.querySelector("#confirm-button");
const optionDivs = document.querySelectorAll(".select-div>div");
const errorText = document.querySelector(".error-div");
let selectedAge;

optionDivs.forEach((option) => {
    option.addEventListener("click", (e) => {
        disableAllDivs();
        option.querySelector("img").classList.add("selected");
        selectedAge = option.dataset.age;
    });
});

confirmButton.addEventListener("click", (e) => {
    if (selectedAge) {
        errorText.classList.add("hidden");
        window.localStorage.setItem("age", selectedAge);
        window.location.href = "../pages/how-it-works.html";
    } else {
        errorText.classList.remove("hidden");
    }
});

backButton.addEventListener("click", (e) => {
    window.location.href = "../pages/gender.html"
});

function disableAllDivs() {
    optionDivs.forEach((option) => {
        option.querySelector("img").classList.remove("selected");
    });
}