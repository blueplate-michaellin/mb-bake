import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import React from 'react';

const FirebaseContext = React.createContext(null);

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
    firebase.initializeApp(config)
    this.auth = firebase.auth()
  }
}

export { FirebaseContext };

export default Firebase;