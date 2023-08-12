const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const matchErrorMessage = document.querySelector(".match-error");

password.addEventListener("input", passwordMatch);
passwordConfirm.addEventListener("input", passwordMatch);

function passwordMatch() {
    if(password.value !== passwordConfirm.value) {
        password.classList.add("error");
        passwordConfirm.classList.add("error");
        matchErrorMessage.style.opacity = "1";
    }
    else {
        password.classList.remove("error");
        passwordConfirm.classList.remove("error");
        matchErrorMessage.style.opacity = "0";
    }
}