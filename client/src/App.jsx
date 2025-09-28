import React, { useState } from "react";
import Hero from "./Components/Hero";
import ContextProvider from "./GlobalContext/GlobalContext";
import ScrollProgress from "./Components/ScrollProgress";
import MsgSentToast from "./Components/MsgSentToast";
import Loader from "./Components/Loader";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./admin/admin_component/Login";
import DashBoard from "./admin/admin_component/DashBoard";
import { AdminContextAuth } from "./admin/adminContext/AdminContext";
import { useContext } from "react";

const App = () => {
  const { userData, isloggedin } = useContext(AdminContextAuth);
  const [isLoading, setisLoading] = useState(true);
  const location = useLocation();
  // if (isLoading && !location.pathname.startsWith("/auth/secret")) {
  //   return <Loader isLoading={isLoading} setisLoading={setisLoading} />;
  // }
  return (
    <div className=" max-w-screen  overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <ContextProvider>
              <Hero />
              <MsgSentToast />
              <ScrollProgress />
            </ContextProvider>
          }
        />

        <Route
          path="/auth/secret/admin-login"
          element={
            <ContextProvider>
              <Login />
            </ContextProvider>
          }
        />

        <Route
          path="/auth/secret/admin/dashboard"
          element={
            userData && isloggedin ? (
              <DashBoard />
            ) : (
              <Navigate to="/auth/secret/admin-login" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
