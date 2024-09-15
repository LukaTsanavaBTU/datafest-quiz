const backButton = document.querySelector("#back-button");
const confirmButton = document.querySelector("#confirm-button");

backButton.addEventListener("click", (e) => {
    window.location.href = "../pages/gender.html";
});

confirmButton.addEventListener("click", (e) => {
    window.location.href = "../pages/how-it-works.html";
});