import { CreateAccount } from "./Firebase/config.js";

const signInForm = document.querySelector("#signInForm");

const inputs = signInForm.getElementsByTagName("input");
const emailInput = inputs[0];
const passwordInput = inputs[1];
const passwordCheckInput = inputs[2];
const buttons = signInForm.getElementsByTagName("button");
const checkDuplicateButton = buttons[0];
const signInButton = buttons[1];

function SignIn(event) {
    event.preventDefault();
    CreateAccount(emailInput.value, passwordInput.value,
        (success) => {
            console.log("회원가입 성공");
        },
        (error) => {
            console.log("회원가입 실패");
        })
}


signInButton.addEventListener("click", SignIn);