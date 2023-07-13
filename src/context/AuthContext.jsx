import { createContext } from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
  }, []);

  const signin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
