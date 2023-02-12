import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);

  const [user, setUser] = useState({});

  //create user
  const userRegister = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user
  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  //user sign out
  const userSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //update user
  const userUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //reset password
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    userLogin,
    userRegister,
    userSignOut,
    userUpdate,
    user,
    loader,
    passwordReset,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
