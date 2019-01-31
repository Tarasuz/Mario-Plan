import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDtOhShjwqrIEGJW8xBzdQhAUdnTyquUqs",
  authDomain: "net-ninja-marioplan-4b1ad.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-4b1ad.firebaseio.com",
  projectId: "net-ninja-marioplan-4b1ad",
  storageBucket: "net-ninja-marioplan-4b1ad.appspot.com",
  messagingSenderId: "380732174639"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firebase;
