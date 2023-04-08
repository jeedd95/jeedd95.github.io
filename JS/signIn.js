import { AddDocData, CreateAccount, FindDocData } from "./Firebase/config.js";

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
const emailInfo = infos[0];
const passwordInfo = infos[1];

let isCompleteEmail=false;
let isCompletePassword=false;
//let isCompleteEmailDuplicate=false;

/** 가입 버튼 클릭 */
function SignIn(event) {
    event.preventDefault();
    if(!isCompleteEmail){ alert("이메일을 확인해주세요"); return;}
    if(!isCompletePassword){alert("비밀번호를 확인해주세요"); return;}
    //if(!isCompleteEmailDuplicate){alert("이메일 중복을 확인해주세요"); return;}

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

/** 이메일 중복 확인 */
function CheckDuplicateDB(email) {
    return new Promise((resolve, reject) => {
        //이메일에 써놓은 정보를 users에서 검색해서 이미 있으면 중복됬다고 알린다
        FindDocData("email", email, (result) => { resolve(result); });
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
/** 이메일 정규식 검증 */
function EmailRegex(email) {
    const emailRegex = VerEx()
        .startOfLine()
        .then(/[a-zA-Z0-9._%+-]+/)
        .then('@')
        .then(/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
        .endOfLine()

        return emailRegex.test(email);
}

async function EmailCheck(event){
    event.preventDefault();

    let regex = EmailRegex(emailInput.value);
    let db= await CheckDuplicateDB(emailInput.value);
    
    if (!regex) {
        emailInfo.innerText = "이메일 형식을 확인해주세요";
        emailInfo.className = "wrong"
        isCompleteEmail=false;
    }else if(db)
    {
        emailInfo.innerText = "중복된 이메일 입니다.";
        emailInfo.className = "wrong"
        isCompleteEmail=false;
    }
    else{
        emailInfo.innerText = "사용 가능한 이메일입니다.";
        emailInfo.className = "correct"
        isCompleteEmail=true;
    }
}


checkDuplicateButton.addEventListener("click", CheckDuplicateDB);
signInButton.addEventListener("click", SignIn);
emailInput.addEventListener("blur",EmailCheck);
passwordInput.addEventListener("input", PasswordInput);
passwordCheckInput.addEventListener("input", PasswordInput);
