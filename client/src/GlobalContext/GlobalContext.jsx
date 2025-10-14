import React, { createContext, useEffect, useRef, useState } from "react";
import { projects } from "../assets/data.js";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastInfo, setToastInfo] = useState({});
  const [allProjects, setAllProjects] = useState([]);

  const [baseUrl, setbaseUrl] = useState(import.meta.env.VITE_BACKEND_URL);

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
        setAllProjects(data.projects);
        console.log("________________________all projects___________");
        console.log("Fetched projects from API:", data.projects);
      }
    } catch (err) {
      console.log("failed to fetchprojects: " + err);
    }
  };
  useEffect(() => {
    getProjectData();
  }, [baseUrl]);

  const lastScrollY = useRef(0);

  const navAppearance = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY.current) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }

    lastScrollY.current = currentScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", navAppearance);
    return () => window.removeEventListener("scroll", navAppearance);
  }, []);

  const contextData = {
    isOpen,
    lastScrollY,
    setIsOpen,
    showMenu,
    setShowMenu,
    showToast,
    setShowToast,
    toastInfo,
    setToastInfo,
    allProjects,
    setAllProjects,
    baseUrl,
    getProjectData,
   
  };

  return (
    <GlobalContext.Provider value={contextData}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
