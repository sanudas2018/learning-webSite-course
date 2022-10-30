import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { router } from "../Routes/Router";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  //   const user = { displayName: "Piya" };
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // google signIn
  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  //   user manage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // sign out
  const signOutAuth = () => {
    signOut(auth);
  };

  // email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in with email and pass
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    loading,
    googleLogin,
    signOutAuth,
    createUser,
    singIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
