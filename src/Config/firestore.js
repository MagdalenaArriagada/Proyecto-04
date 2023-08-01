import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOLtPmmixu1-1xOAqplxLX64Se_Ud5fhI",
    authDomain: "proyecto-04-66afe.firebaseapp.com",
    projectId: "proyecto-04-66afe", 
    storageBucket: "proyecto-04-66afe.appspot.com",  
    messagingSenderId: "472097006729", 
    appId: "1:472097006729:web:4e3cb0e8a519ebefea1258", 
    measurementId: "G-L6F7BYT5S0"

};

const firebaseApp = initializeApp( firebaseConfig );
export const db = getFirestore( firebaseApp );