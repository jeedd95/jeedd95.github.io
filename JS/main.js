import { SignIn, LogOut, SignOut, DeleteDB } from "./Firebase/config.js";

const clock = document.querySelector('#clock');
const loginBtn = document.querySelector('#Login');
const signinBtn = document.querySelector('#Signin');
const LogOutBtn = document.querySelector('#Logout');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const signOutBtn = document.querySelector('#Signout');



function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function Login() {
  console.log("로그인 버튼 클릭");
  SignIn(emailInput.value, passwordInput.value, (Success) => {
    alert("로그인에 성공하셨습니다!");
    window.location.assign('menu.html');
  },
    (Error) => {
      alert(`로그인에 실패하셨습니다!\n${Error}`);
    });
}

function Signin() {
  console.log("회원가입 클릭");
  window.location.assign('auth.html');
}

function _SignOut() {
  console.log("회원탈퇴 클릭");
  SignOut((user) => {
    //DB삭제
    DeleteDB(user.uid);
    alert(user);
    console.log(user);
  }, (Error) => {
    alert(Error);
    console.log(Error);
  });

  
}

getTime();
setInterval(getTime, 1000);
loginBtn.addEventListener("click", Login);
signinBtn.addEventListener("click", Signin);
LogOutBtn.addEventListener("click", LogOut);
signOutBtn.addEventListener("click", _SignOut);
//console.log(document.writeln(location.href));