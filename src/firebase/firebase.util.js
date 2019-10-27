import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwoDOp2PjpagcG_EyTqb_4bQBxVuEMAXY",
  authDomain: "crwn-db-1c463.firebaseapp.com",
  databaseURL: "https://crwn-db-1c463.firebaseio.com",
  projectId: "crwn-db-1c463",
  storageBucket: "crwn-db-1c463.appspot.com",
  messagingSenderId: "958724714151",
  appId: "1:958724714151:web:308f2cf32683930f213582",
  measurementId: "G-75JG8EZ8RY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
      catch(err){
        console.log("error found", err.message);
      }

  }

  return userRef;
  
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
