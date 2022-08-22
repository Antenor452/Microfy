import { auth } from "./firebaseSetup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "firebase/auth";

const createAccount = (username, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: username,
      }).catch((error) => {
        console.log("Error updating username");
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.Message;
    });
};

const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.Message;
    });
};

const logOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

const resetPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Sent");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.Message;
    });
};
