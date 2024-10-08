const options = (document.querySelectorAll(".answer-div").length > 0) ? document.querySelectorAll(".answer-div") : document.querySelectorAll(".answer-img");
const answerButton = document.querySelector("button");
const errorText = document.querySelector(".error");

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

answerButton.addEventListener("click", (e) => {
    const selected = document.querySelector(".selected");
    if (!selected) {
        errorText.classList.add("show");
    } else if (selected.dataset.correct === "1") {
        errorText.classList.remove("show");
        const fileNum = parseInt(location.href.split("/").at(-1).at(9));
        location.href = `./question-${fileNum + 1}.html`;
    } else {
        errorText.classList.remove("show");
        location.href = "./wrong-answer.html";
    }
});
