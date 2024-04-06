import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSUe5vXJwcqHcGlSphagvpf6y2JHBafUE",
    authDomain: "fithub-93049.firebaseapp.com",
    projectId: "fithub-93049",
    storageBucket: "fithub-93049.appspot.com",
    messagingSenderId: "336849111792",
    appId: "1:336849111792:web:6922f9c2ff0e4fe7db9035"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getFirestore(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// export { db } 
export { db };
