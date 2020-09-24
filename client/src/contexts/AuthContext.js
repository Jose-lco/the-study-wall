import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    id: "",
    username: ""

  });
  const toggleAuth = () => {
    const authenticated = user.isAuthenticated;
    setUser({ ...user, isAuthenticated: !authenticated})
    return user.isAuthenticated;
  }
  const addUser = (id, username) => {
    setUser({...user,
    id,
    username,
  })
  }
  return (
    <AuthContext.Provider value={{ user, toggleAuth, addUser,}}>
      {children}
    </AuthContext.Provider>);
}

