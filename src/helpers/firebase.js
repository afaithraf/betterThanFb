import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD7c4eH2Ue3F5GPp9KH9aVgEmTQuUnKp0M",
    authDomain: "betterthanfb-91c44.firebaseapp.com",
    databaseURL: "https://betterthanfb-91c44.firebaseio.com",
    projectId: "betterthanfb-91c44",
    storageBucket: "betterthanfb-91c44.appspot.com",
    messagingSenderId: "514249819434",
    appId: "1:514249819434:web:7eb972edb355f4ee66ca53",
    measurementId: "G-MPL09W5XS0"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();