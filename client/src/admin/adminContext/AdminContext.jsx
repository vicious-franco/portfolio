import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const AdminContextAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [baseUrl, setbaseUrl] = useState(import.meta.env.VITE_BACKEND_URL);

  // product to display
  const [projects, setProjects] = useState(null);

  // authentication api
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
  // get data from api
  const getProjectData = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/projects/all-projects`, {
        method: "get",
        headers: { "content-type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("failed to connect DB");
      }
      const data = await res.json();
      if (data.success) {
        setProjects(data.projects);
      }
    } catch (err) {
      console.log("failed to fetchprojects: " + err);
    }
  };

  // delete request api

  const deleteProject = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/api/projects/remove/${id}`, {
        method: "delete",
      });
      if (!res.ok) {
        throw new Error("failed to connect to server");
      }
      const data = await res.json();
      if (data.success) {
        await getProjectData();
      }
    } catch (error) {

    }
  };


  
  const data = {
    userData,
    isloggedin,
    baseUrl,
    authenticateUser,
    projects,
    setProjects,
    getProjectData,
    deleteProject,
   
  };
  return (
    <AdminContextAuth.Provider value={data}>
      {children}
    </AdminContextAuth.Provider>
  );
};
