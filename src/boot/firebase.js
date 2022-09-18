import firebase from "firebase/app"
import "firebase/analytics";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCiWYs9POgpCSYuF_IzX-jyCYBL4v635Go",
  authDomain: "todo-tianzuo.firebaseapp.com",
  databaseURL: "https://todo-tianzuo-default-rtdb.firebaseio.com",
  projectId: "todo-tianzuo",
  storageBucket: "todo-tianzuo.appspot.com",
  messagingSenderId: "234853916323",
  appId: "1:234853916323:web:5c1395aa799ea02053a916"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebase.auth()
let firebaseDb = firebase.database()
firebase.analytics()

export {firebaseAuth, firebaseDb}
