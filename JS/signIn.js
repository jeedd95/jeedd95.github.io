const signInForm = document.querySelector("#signInForm");
const emailInput = document.querySelector("#signInForm .emailInput");
const passwordInput = document.querySelectorAll("#signInForm .passwordInput");
const signInButton = document.querySelector("#signInForm .signInButton");

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

function SignIn(event){
    event.preventDefault();
    console.log("가입버튼 클릭");
    console.log(emailInput.innerText);
    console.log(passwordInput.innerText);

    //createUserWithEmailAndPassword(auth,emailInput.innerText,passwordInput.innerText);
}

signInButton.addEventListener("click",SignIn);