import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDUHDG0uBzdWgzkYw823pasof780Rvx53g",
  authDomain: "crown-db-e9048.firebaseapp.com",
  databaseURL: "https://crown-db-e9048.firebaseio.com",
  projectId: "crown-db-e9048",
  storageBucket: "crown-db-e9048.appspot.com",
  messagingSenderId: "565036774037",
  appId: "1:565036774037:web:9dbca117671f3a65f8219c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
