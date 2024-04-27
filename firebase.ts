import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvgI6h43svkMj_Anp5Jw4H8b_OYTiCePE",
    authDomain: "chatgpt-replica-17e2c.firebaseapp.com",
    projectId: "chatgpt-replica-17e2c",
    storageBucket: "chatgpt-replica-17e2c.appspot.com",
    messagingSenderId: "534067610967",
    appId: "1:534067610967:web:0540f38f60f0fe3476aa12"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }