import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCSUe5vXJwcqHcGlSphagvpf6y2JHBafUE",
    authDomain: "fithub-93049.firebaseapp.com",
    projectId: "fithub-93049",
    storageBucket: "fithub-93049.appspot.com",
    messagingSenderId: "336849111792",
    appId: "1:336849111792:web:6922f9c2ff0e4fe7db9035"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);