// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0G5lR1O94Iz356ZttUxjS6utQAEaSKBI",
  authDomain: "next-netflix-clone-29700.firebaseapp.com",
  projectId: "next-netflix-clone-29700",
  storageBucket: "next-netflix-clone-29700.appspot.com",
  messagingSenderId: "751384988796",
  appId: "1:751384988796:web:3cf30a7cbfdcb5fa4c8df9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore();
export const auth = getAuth();

export default app;
