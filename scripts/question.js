const options = document.querySelectorAll(".answer-div") || document.querySelectorAll(".select-div");
const answerButton = document.querySelector("button");

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
        alert("Please, choose and option.");
    } else if (selected.dataset.correct === "1") {
        const fileNum = parseInt(location.href.split("/").at(-1).at(9));
        location.href = `./question-${fileNum + 1}.html`;
    } else {
        location.href = "./wrong-answer.html";
    }
});
