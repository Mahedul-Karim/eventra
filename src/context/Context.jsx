import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(true);
  // const [isLoading,setIsLoading] = useState(false);

  return <Context value={{ user, setUser }}>{children}</Context>;
};

export const useStore = () => {
  return useContext(Context);
};

export default Provider;
