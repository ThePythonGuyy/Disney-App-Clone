// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'
import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2SswEJTyqmZCo06KjQiN1YHBIN2KtGSg",
  authDomain: "disney-clone-a2354.firebaseapp.com",
  projectId: "disney-clone-a2354",
  storageBucket: "disney-clone-a2354.appspot.com",
  messagingSenderId: "764858277016",
  appId: "1:764858277016:web:a16696916df400c9c684ed",
  measurementId: "G-SY8H12PSCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const Gprovider = new GoogleAuthProvider();
const db = getFirestore()
const storage = getStorage(app)

export { auth, Gprovider, storage };
export default db;