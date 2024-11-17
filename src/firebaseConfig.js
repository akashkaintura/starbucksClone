import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAfHdy7Y6dQb-ybBImLxq0ZoktAC68KWCE",
    authDomain: "akash-pacman.firebaseapp.com",
    projectId: "akash-pacman",
    storageBucket: "akash-pacman.firebasestorage.app",
    messagingSenderId: "726007465089",
    appId: "1:726007465089:web:fcfaa09dc018bfd6723980",
    measurementId: "G-7HZG6L8GKL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
