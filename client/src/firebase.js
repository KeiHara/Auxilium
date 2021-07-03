import firebase from 'firebase/app';
import "firebase/auth"

var app = firebase.initializeApp({
    apiKey: "AIzaSyBCo-NL-VvHDHSNqb67JJMTKqrJuyY2aXc",
    authDomain: "auxilium-e9da2.firebaseapp.com",
    databaseURL: "https://auxilium-e9da2-default-rtdb.firebaseio.com",
    projectId: "auxilium-e9da2",
    storageBucket: "auxilium-e9da2.appspot.com",
    messagingSenderId: "178659070790",
    appId: "1:178659070790:web:6ecb4d421b205a8f730b47",
    measurementId: "G-TYDK583HK7"
});

export const auth = app.auth()
export default app