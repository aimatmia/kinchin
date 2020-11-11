import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeprzabdyo1cXI4eJOBOfjafQ3YNHhjJw",
    authDomain: "kinchin-1c00b.firebaseapp.com",
    databaseURL: "https://kinchin-1c00b.firebaseio.com",
    projectId: "kinchin-1c00b",
    storageBucket: "kinchin-1c00b.appspot.com",
    messagingSenderId: "371579962488",
    appId: "1:371579962488:web:6eed6866e68c1e3100d98d",
    measurementId: "G-R177PGMRSZ"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();