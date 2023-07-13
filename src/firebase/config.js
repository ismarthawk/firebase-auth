import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqvK3dVaPb4qE-mwv1Uhii-_Rd-ZKo2g0",
  authDomain: "auth-app-23bf8.firebaseapp.com",
  projectId: "auth-app-23bf8",
  storageBucket: "auth-app-23bf8.appspot.com",
  messagingSenderId: "907515613722",
  appId: "1:907515613722:web:3458097e8aa62b6879f7a3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
