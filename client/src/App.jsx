import React, { useState } from "react";
import Hero from "./Components/Hero";
import ContextProvider from "./GlobalContext/GlobalContext";
import ScrollProgress from "./Components/ScrollProgress";
import MsgSentToast from "./Components/MsgSentToast";
import Loader from "./Components/Loader";
const App = () => {
  const [isLoading, setisLoading] = useState(true);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className=" max-w-screen  overflow-hidden">
      <ContextProvider>
        {isLoading}
        <Loader />
        <Hero />
        <MsgSentToast />
      </ContextProvider>
      <ScrollProgress />
    </div>
  );
};

export default App;
