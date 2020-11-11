import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

// Make sure it hasn't already been initialized
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDeprzabdyo1cXI4eJOBOfjafQ3YNHhjJw",
    authDomain: "kinchin-1c00b.firebaseapp.com",
    projectId: "kinchin-1c00b",
  });
}

export default firebase;
