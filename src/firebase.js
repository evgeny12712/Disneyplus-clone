const firebaseConfig = {
    apiKey: "AIzaSyAGCWerlDdyziC80YwFPdigNjBTo1ZULSg",
    authDomain: "disneyplus-clone-bace5.firebaseapp.com",
    projectId: "disneyplus-clone-bace5",
    storageBucket: "disneyplus-clone-bace5.appspot.com",
    messagingSenderId: "560410424471",
    appId: "1:560410424471:web:9f99c2b9850493f2b225d2",
    measurementId: "G-RPXN16WCSZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage();

export { auth, provider, storage }
export default db