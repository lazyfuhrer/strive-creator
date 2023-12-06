// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3MdfZmgdDriI3D2nsfugAM4wcxrinNfQ",
  authDomain: "strive-creator.firebaseapp.com",
  projectId: "strive-creator",
  storageBucket: "strive-creator.appspot.com",
  messagingSenderId: "53206111703",
  appId: "1:53206111703:web:321e37e88b40afb4592792",
  measurementId: "G-2019VZXQ3B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);