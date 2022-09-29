import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "firebase-config";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const singUp = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const logout = () => {
    return signOut(firebaseAuth);
  };

  onAuthStateChanged(firebaseAuth, (user) => {
    setAuth(user);
    setIsLoading(true);
  });

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, login, singUp, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
