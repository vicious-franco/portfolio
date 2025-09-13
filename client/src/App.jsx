import React, { useState } from "react";
import Hero from "./Components/Hero";
import ContextProvider from "./GlobalContext/GlobalContext";
import ScrollProgress from "./Components/ScrollProgress";
import MsgSentToast from "./Components/MsgSentToast";
import Loader from "./Components/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./admin/Login";
import DashBoard from "./admin/DashBoard";

const App = () => {
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
      </Routes>

      <Routes>
        <Route path="/auth/secret/admin-login" element={<Login />} />
        <Route path="/auth/secret/admin/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default App;
