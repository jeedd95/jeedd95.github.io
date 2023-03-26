const clock = document.querySelector('#clock');
const loginBtn = document.querySelector('#Login');
const signinBtn = document.querySelector('#Signin');


function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function Login() {
  console.log("로그인 버튼 클릭");
}

function Signin() {
  console.log("회원가입 클릭");
  window.location.assign('auth.html');
}

getTime();
setInterval(getTime, 1000);
loginBtn.addEventListener("click", Login);
signinBtn.addEventListener("click",Signin);
//console.log(document.writeln(location.href));