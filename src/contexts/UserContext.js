import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { router } from "../Routes/Router";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  //   const user = { displayName: "Piya" };
  const [user, setUser] = useState(null);
  const [githubUser, setGithubUser] = useState(false);
  const [loading, setLoading] = useState(true);

  // google signIn
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // github signIn
  const gitHubLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //   user manage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   setUser(currentUser);
      // .emailVerified
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // sign out
  const signOutAuth = () => {
    setLoading(true);
    signOut(auth);
  };

  // email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in with email and pass
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // updateUserProfile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // verify Email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  // reset password
  const passwordReset = (email) => {
    setLoading(true);
    sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    loading,
    googleLogin,
    gitHubLogin,
    signOutAuth,
    createUser,
    singIn,
    updateUserProfile,
    verifyEmail,
    setLoading,
    passwordReset,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
