import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCH4QGvpixS8VHffK2FdjA0k5t0uIA37uQ",
  authDomain: "react-web-5056f.firebaseapp.com",
  databaseURL: "https://react-web-5056f.firebaseio.com",
  projectId: "react-web-5056f",
  storageBucket: "react-web-5056f.appspot.com",
  messagingSenderId: "914846633504",
  appId: "1:914846633504:web:64b3e115f933345e88f645",
  measurementId: "G-YZWKKQEJ4K",
};

firebase.initializeApp(config);

// google auth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
