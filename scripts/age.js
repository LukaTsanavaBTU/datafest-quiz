const backButton = document.querySelector("#back-button");
const confirmButton = document.querySelector("#confirm-button");
const optionDivs = document.querySelectorAll(".select-div>div");
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
        window.localStorage.setItem("age", selectedAge);
        window.location.href = "../pages/how-it-works.html";
    } else {
        alert("Please, Select an option."); //add visuals to let user know to pick an option
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