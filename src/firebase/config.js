// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9_E9bDlwGmIZoetLYeeWtFrQ9qCfsi_4",
  authDomain: "react-journalapp-149e0.firebaseapp.com",
  projectId: "react-journalapp-149e0",
  storageBucket: "react-journalapp-149e0.appspot.com",
  messagingSenderId: "974798634033",
  appId: "1:974798634033:web:f5a69c68e62910f2b92910"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

