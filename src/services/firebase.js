import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Add Auth Context
import { useContext } from "react";

const config = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: process.env.FIREBASE_databaseURL,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
};

class Firebase {
  constructor() {
    if (typeof window !== 'undefined') {
      firebase.initializeApp(config);
      this.auth = firebase.auth();
      this.uiConfig = {
        callbacks: {
        },
        signInFlow: 'popup',
        signInSuccessUrl: '/page-2',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        ],
      }
    }
  }
}

export default Firebase;