const signInForm = document.querySelector("#signInForm");
const emailInput = document.querySelector("input#bbb");
const passwordInput = document.querySelectorAll("#signInForm .passwordInput");
const signInButton = document.querySelector("#signInForm .signInButton");
const clock = document.querySelector("h2#clock");

function SignIn(event){
    event.preventDefault();
    console.log("가입버튼 클릭");
    console.log(clock.innerHTML);
    console.log(emailInput);
    // console.log(emailInput);
    // console.log(emailInput.innerText);
    //console.log(passwordInput.innerText);
}

signInButton.addEventListener("click",SignIn);