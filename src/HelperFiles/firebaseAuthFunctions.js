import { auth } from "./firebaseSetup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "firebase/auth";

export default class authFunctions {
  static createAccount = (username, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: username,
        }).catch((error) => {
          return error;
        });
      })
      .catch((error) => {
        // console.log(error);
        return error;
      });
  };

  static signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  static logOut = () => {
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
