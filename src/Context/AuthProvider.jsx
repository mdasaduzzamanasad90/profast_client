import { useEffect, useState } from "react";
import { auth } from "../FirebaseConfig/FirebaseConfig";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  // Sign up
  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign in
  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const logout = () => {
    setloading(true);
    return signOut(auth);
  };
  // check user is true / false
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createuser,
    login,
    logout,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
