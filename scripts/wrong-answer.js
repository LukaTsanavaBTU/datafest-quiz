const againButton = document.querySelector("button");

againButton.addEventListener("click", (e) => {
    window.history.back();
});