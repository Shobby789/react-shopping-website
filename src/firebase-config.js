// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9yfgSt1P29SDrn1s_Ym7xaDd0KuAERmo",
  authDomain: "fir-auth-3461a.firebaseapp.com",
  projectId: "fir-auth-3461a",
  storageBucket: "fir-auth-3461a.appspot.com",
  messagingSenderId: "177910644581",
  appId: "1:177910644581:web:2c862ae6a04f53daa92b8c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
