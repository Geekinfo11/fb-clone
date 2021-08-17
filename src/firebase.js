import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCW9TuKPKGLAmEcCWacXB2GXWwrv_R0okA",
    authDomain: "fb-clone-d4106.firebaseapp.com",
    projectId: "fb-clone-d4106",
    storageBucket: "fb-clone-d4106.appspot.com",
    messagingSenderId: "168160526951",
    appId: "1:168160526951:web:b0edf3101c0080043acac2",
    measurementId: "G-XQ55SQFWKY"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebaseApp.firestore()

export { auth, provider }
export default db