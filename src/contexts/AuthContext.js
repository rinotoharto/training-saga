import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem("userProfile"));
  const [currentUser, setCurrentUser] = useState(localUser);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
