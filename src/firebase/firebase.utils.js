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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // create data if the snapshot doesn't exists
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

// google auth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
