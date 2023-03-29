// Import the functions you need from the SDKs you need
//import { initializeApp } from "../../node_modules/firebase/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
 import { getAnalytics } from "../../node_modules/firebase/firebase-analytics.js";
 import { getAuth} from "../../node_modules/firebase/firebase-auth.js";
 import { getFirestore } from "../../node_modules/firebase/firebase-firestore.js";


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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

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