import { AddDocData, CreateAccount, FindDocData } from "./Firebase/config.js";
import VerEx from 'verbal-expressions';

const signInForm = document.querySelector("#signInForm");

const inputs = signInForm.getElementsByTagName("input");
const emailInput = inputs[0];
const passwordInput = inputs[1];
const passwordCheckInput = inputs[2];
const nickNameInput = inputs[3];
const buttons = signInForm.getElementsByTagName("button");
const checkDuplicateButton = buttons[0];
const signInButton = buttons[1];
const infos = signInForm.getElementsByTagName("label");
const passwordInfo = infos[0];

let isCompletePassword;

/** 가입 버튼 클릭 */
function SignIn(event) {
    event.preventDefault();
    const myData = {
        email: emailInput.value,
        password: passwordInput.value,
        nickName: nickNameInput.value
    }
    CreateAccount(myData,
        (user) => {
            AddDocData(myData, user.uid);
            alert(`[${myData.nickName}] 회원 가입 성공`);
        },
        (errorCode) => {
            alert(`회원 가입 실패\n에러코드 : ${errorCode}`);
        })
}

/** 중복 확인 버튼 클릭 */
function CheckDuplicateDB(event) {
    event.preventDefault();
    //이메일에 써놓은 정보를 users에서 검색해서 이미 있으면 중복됬다고 알린다
    FindDocData("email", emailInput.value, (callback) => {
        if (callback === true) {
            alert("중복된 이메일입니다.");
            emailInput.value = "";
        }
        else {
            alert("사용 가능한 이메일입니다.");
        }
    });
}

/** 비밀번호 일치 확인 */
function PasswordInput() {
    if (passwordInput.value !== passwordCheckInput.value) {
        passwordInfo.innerText = "비밀번호가 일치 하지않습니다.";
        isCompletePassword = false;
    }
    else {
        passwordInfo.innerText = "";
        isCompletePassword = true;
    }
}
/** 이메일 정규식 생성 */
function GenerateRegex(email) {
    const emailRegex = VerEx()
        .startOfLine()
        .something()
        .maybe('@')
        .endOfLine()

    return emailRegex.test(email);
}

checkDuplicateButton.addEventListener("click", CheckDuplicateDB);
signInButton.addEventListener("click", SignIn);
passwordInput.addEventListener("input", PasswordInput);
passwordCheckInput.addEventListener("input", PasswordInput);
GenerateRegex("ads@naver.com");
