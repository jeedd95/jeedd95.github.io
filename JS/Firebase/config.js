// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, deleteUser, reauthenticateWithCredential,EmailAuthProvider} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { doc, setDoc, getDocs, getFirestore, collection, query, where, addDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNBUM5fhGr6bFe5Dyc8JzoDG3XK1hbLT8",
  authDomain: "homepage-4e10f.firebaseapp.com",
  projectId: "homepage-4e10f",
  storageBucket: "homepage-4e10f.appspot.com",
  messagingSenderId: "521214527446",
  appId: "1:521214527446:web:336e05588ad89559704677",
  measurementId: "G-FZL1XH7BC6"
};

const DocRef = Object.freeze({
  USERS: "users"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const user = auth.currentUser;

// const analytics = getAnalytics(app);

/** 회원가입 */
export function CreateAccount(user, Success, Error) {
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      Success(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      Error(errorCode);
    })
}

/** 로그인 */
export function SignIn(email, password, Success, Error) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      Success(user);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Error(errorCode);
    });
}

/** FireStore 데이터 저장
 * @param {object} myData 내 데이터
 * @param {string} uid Auth에서 생성되는 uid
 */
export async function AddDocData(myData, uid,callback) {
  await setDoc(doc(db, DocRef.USERS, uid), myData)
  .then(()=>{callback();});

  // try {
  //   const docRef = await addDoc(collection(db, DocRef.USERS),myData);
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
}

/** FireStroe 데이터 검색
 * @param {string} ref 찾을 필드
 * @param {*} input 검색 데이터
 */
export async function FindDocData(ref, input, callback) {
  const q = query(collection(db, DocRef.USERS), where(ref, "==", input));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.size > 0) {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    callback(true);
  }
  else {
    callback(false);
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("로그인 된 상태");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    console.log("로그인 안된 상태");

    // User is signed out
    // ...
  }
});

/** 로그아웃
 */
export function LogOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("로그아웃 성공");
    location.reload();
  }).catch((error) => {
    // An error happened.
    console.log("로그아웃 실패");
  });
}

/** Auth 회원탈퇴 */
export function SignOut(Success,Error){
  deleteUser(auth.currentUser).then(() => {
    // User deleted.
    Success(auth.currentUser);
  }).catch((error) => {
    // An error ocurred
    // ...
    Error(error)
  });
}

/** DB삭제 */
export async function DeleteDB(uid) {
  await deleteDoc(doc(db, DocRef.USERS, uid));
}
