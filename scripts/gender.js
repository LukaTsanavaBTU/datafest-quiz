const backButton = document.querySelector("button");
const optionDivs = document.querySelectorAll(".select-div>div");
const errorText = document.querySelector(".button-div>div");
let selectedGender;

optionDivs.forEach((option) => {
    option.addEventListener("click", (e) => {
        disableAllDivs();
        option.querySelector("img").classList.add("selected");
        selectedGender = option.dataset.gender;
    });
});

backButton.addEventListener("click", (e) => {
    if (selectedGender) {
        errorText.classList.add("hidden");
        window.localStorage.setItem("gender", selectedGender);
        window.location.href = "../pages/age.html";
    } else {
        errorText.classList.remove("hidden");
    }
});

function disableAllDivs() {
    optionDivs.forEach((option) => {
        option.querySelector("img").classList.remove("selected");
    });
}
