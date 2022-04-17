// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDYVVb_SwewPunh9UFXlAag60Bs-giBCGk",
    authDomain: "gym-trainer-26f0d.firebaseapp.com",
    projectId: "gym-trainer-26f0d",
    storageBucket: "gym-trainer-26f0d.appspot.com",
    messagingSenderId: "1032047129690",
    appId: "1:1032047129690:web:53fef2e3aeaf4ea50d5463",
};
// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_apiKey,
//     authDomain:process.env.REACT_APP_authDomain,
//     projectId:process.env.REACT_APP_projectId,
//     storageBucket:process.env.REACT_APP_storageBucket,
//     messagingSenderId:process.env.REACT_APP_messagingSenderId,
//     appId:process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
