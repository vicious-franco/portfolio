import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const AdminContextAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [baseUrl, setbaseUrl] = useState(import.meta.env.VITE_BACKEND_URL);

  const authenticateUser = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/portfolio/user`, {
        method: "get",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("unauthorized");
      }

      const data = await res.json();
      console.log(data);
      if (data.success) {
        setUserData(data);
        setIsloggedin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  const data = { userData, isloggedin, baseUrl, authenticateUser };
  return (
    <AdminContextAuth.Provider value={data}>
      {children}
    </AdminContextAuth.Provider>
  );
};
