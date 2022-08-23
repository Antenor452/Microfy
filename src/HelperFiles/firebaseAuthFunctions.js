import { auth } from "./firebaseSetup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "firebase/auth";

export default class authFunctions {
  createAccount = (username, email, password) => {
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

  signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
      });
  };

  logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
      });
  };
}
