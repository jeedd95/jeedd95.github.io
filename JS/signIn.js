const signInForm = document.querySelector("#signInForm");
const emailInput = document.querySelector("#signInForm .emailInput");
const passwordInput = document.querySelectorAll("#signInForm .passwordInput");
const signInButton = document.querySelector("#signInForm .signInButton");

function SignIn(event){
    event.preventDefault();
    console.log("가입버튼 클릭");
    console.log(emailInput.innerText);
    console.log(passwordInput.innerText);
}

signInButton.addEventListener("click",SignIn);