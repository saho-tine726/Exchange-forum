import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAUoxVnOHEAVTOE8z9nAQOTrNRRsctb2XQ",
  authDomain: "exchange-forum.firebaseapp.com",
  projectId: "exchange-forum",
  storageBucket: "exchange-forum.appspot.com",
  messagingSenderId: "123514572145",
  appId: "1:123514572145:web:0e96645afa154fc867bad0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };