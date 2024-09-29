//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6a8L7cLvN60ztfcNPdaCYU4ecA-AgCd0",
  authDomain: "pallavceo.firebaseapp.com",
  projectId: "pallavceo",
  storageBucket: "pallavceo.appspot.com",
  messagingSenderId: "797835591042",
  appId: "1:797835591042:web:a2d5ab0341c91e1451e39b"
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app;
