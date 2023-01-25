import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPXv41wNzpj4kpHz24lpyAFVFKvucxPOA",
  authDomain: "secqurealse-project.firebaseapp.com",
  databaseURL: "https://secqurealse-project-default-rtdb.firebaseio.com",
  projectId: "secqurealse-project",
  storageBucket: "secqurealse-project.appspot.com",
  messagingSenderId: "116014898176",
  appId: "1:116014898176:web:819be9920c5ec9c1e08ce5",
  measurementId: "G-LSSMT8ZDCZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
