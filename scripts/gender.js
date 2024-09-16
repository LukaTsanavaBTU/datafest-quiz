const backButton = document.querySelector("button");
const optionDivs = document.querySelectorAll(".select-div>div");
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
        window.localStorage.setItem("gender", selectedGender);
        window.location.href = "../pages/age.html";
    } else {
        alert("Please, Select an option."); //add visuals to let user know to pick an option
    }
});

function disableAllDivs() {
    optionDivs.forEach((option) => {
        option.querySelector("img").classList.remove("selected");
    });
}
