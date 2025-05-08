import { auth } from "@/config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [updatedUser, setUpdatedUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  useEffect(() => {
    if (!updatedUser) return;

    setUser(updatedUser);
    setUpdatedUser(null);
  }, [updatedUser]);

  return <Context value={{ user, setUser, isLoading,setUpdatedUser }}>{children}</Context>;
};

export const useStore = () => {
  return useContext(Context);
};

export default Provider;
