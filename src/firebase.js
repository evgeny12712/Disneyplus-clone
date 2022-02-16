import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAGCWerlDdyziC80YwFPdigNjBTo1ZULSg",
    authDomain: "disneyplus-clone-bace5.firebaseapp.com",
    projectId: "disneyplus-clone-bace5",
    storageBucket: "disneyplus-clone-bace5.appspot.com",
    messagingSenderId: "560410424471",
    appId: "1:560410424471:web:9f99c2b9850493f2b225d2",
    measurementId: "G-RPXN16WCSZ"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore();
const colRef = collection(db, 'movies')
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const storage = firebase.storage();
export { auth, provider, doc, getDoc, colRef }
export default db