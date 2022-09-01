import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZt2PIXrurltcLX-Ha81HIJPMqjiTuI2o",
  authDomain: "task-7ca4b.firebaseapp.com",
  projectId: "task-7ca4b",
  storageBucket: "task-7ca4b.appspot.com",
  messagingSenderId: "429565726200",
  appId: "1:429565726200:web:b525cf1e5062d3b029da0d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
