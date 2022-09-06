import { auth } from "./firebaseSetup";
import { sendPasswordResetEmail, signOut } from "firebase/auth";

export default class authFunctions {
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
        console.log(error);
      });
  };
}
