import * as firebase from "firebase/app"
import "firebase/analytics";

import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC__9eoYo1zrK88YS3lg19DV_tJP8zLd0w",
  authDomain: "tz-todo.firebaseapp.com",
  databaseURL: "https://tz-todo-default-rtdb.firebaseio.com",
  projectId: "tz-todo",
  storageBucket: "tz-todo.appspot.com",
  messagingSenderId: "971234233014",
  appId: "1:971234233014:web:0ead32cd1e6f3ef6b5f417",
  measurementId: "G-FGVN1G4CED"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebase.auth()
firebase.analytics()

export {firebaseAuth}
