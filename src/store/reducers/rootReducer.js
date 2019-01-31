import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import auth from "./auth";
import project from "./project";

const rootReducer = combineReducers({
  auth,
  project,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
