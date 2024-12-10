import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOf_4zUvoAIT2vsHlgflt4Tynw88xP_l0",
  authDomain: "sns-flatform000.firebaseapp.com",
  projectId: "sns-flatform000",
  storageBucket: "sns-flatform000.appspot.com",
  messagingSenderId: "896405695656",
  appId: "1:896405695656:web:af5463b05bf0c7afdb669d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
