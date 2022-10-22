import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJnBDYLW07UtMiyAj2KRs0KBqJtScEfts",
    authDomain: "linkedin-clone-7f429.firebaseapp.com",
    projectId: "linkedin-clone-7f429",
    storageBucket: "linkedin-clone-7f429.appspot.com",
    messagingSenderId: "1015346898968",
    appId: "1:1015346898968:web:7c6086f948a71eadfb3b6d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};