import * as firebase from "firebase/app";
import * as auth from "firebase/auth";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiIEN-17RTBaYnG1XCrqCyNSp9Io0wNDA",
    authDomain: "fir-login-23fb1.firebaseapp.com",
    projectId: "fir-login-23fb1",
    storageBucket: "fir-login-23fb1.appspot.com",
    messagingSenderId: "1003746500168",
    appId: "1:1003746500168:web:2272226bad1eb6bb83827d"
};

firebase.initializeApp(firebaseConfig);

export const myFirebase = auth;
const baseDb = firestore;
export const db = baseDb;