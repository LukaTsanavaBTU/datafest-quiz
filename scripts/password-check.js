const answerButton = document.querySelector("button");
const passwordInput = document.querySelector("input");

answerButton.addEventListener("click", (e) => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) {strength++;}
    if (/[A-Z]/.test(password)) {strength++;}
    if (/[a-z]/.test(password)) {strength++;}
    if (/\d/.test(password)) {strength++;}
    if (/[^A-Za-z0-9]/.test(password)) {strength++;}

    if (strength >= 4) {
        window.location.href = "./password-strong.html";
    } else {
        window.location.href = "./password-weak.html";
    }
});
