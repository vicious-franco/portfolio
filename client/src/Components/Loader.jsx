import { setStyle } from "framer-motion";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [outputText, setOutputText] = useState("");
  const text = " Welcome to My Portfolio";

  useEffect(() => {
    let index = 0;
    const typeWritter = () => {
      const interval = setInterval(() => {
        if (index < text.length) {
          console.log(index);
          setOutputText((prev) => prev + text.charAt(index));
          index += 1;
        } else {
          clearInterval(interval);
          setTimeout(() => setOutputText(""), 1000);
        }
      }, 300);

      return () => clearInterval(interval);
    };
    typeWritter();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div>
        <h1 className="text-white text-center">{outputText}</h1>
        <div className="w-[20em] m-auto h-2 border border-white"></div>
      </div>
    </div>
  );
};

export default Loader;
