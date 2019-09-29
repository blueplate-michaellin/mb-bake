import firebase from 'firebase';
// import 'firebase/firestore';

var config = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: process.env.FIREBASE_databaseURL,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    // this.store = firebase.firestore;
    this.auth = firebase.auth;
  }

  /**get dishes() {
    return this.store().collection('dishes');
  } **/
}

export default new Firebase();