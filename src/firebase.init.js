// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVH1bucrqqn98jI4gcfTaR4lT50rPrr78",
  authDomain: "fir-authentication-a74ef.firebaseapp.com",
  projectId: "fir-authentication-a74ef",
  storageBucket: "fir-authentication-a74ef.appspot.com",
  messagingSenderId: "361215877511",
  appId: "1:361215877511:web:9256281559cc0f272a3322"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;