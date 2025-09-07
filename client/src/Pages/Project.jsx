import React, { useState } from "react";
import { projects } from "../assets/data";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../utilis/motion";

const Project = () => {
  const [desc, setDesc] = useState({});
  const [showToolTip, setshowToolTip] = useState({});

  const handleToolTip = (id) => {
    const alreadyVisible = !!showToolTip[id];
    setshowToolTip((prev) => {
      return { ...prev, [id]: !alreadyVisible };
    });
    console.log(showToolTip);
  };

  return (
    <section id="projects" className="mb-10 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          type: "tween",
        }}
        className="text-4xl w-full  text-center font-extrabold  mt-12 text-white/85 uppercase tracking-wide"
      >
        Recent <span className="text-[#4bd3a8ca]">works </span>
        <hr className="w-35 m-[18px_auto] border-t-2 border-[#4bd3a8ca]/50" />
      </motion.h2>
      <div>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            type: "tween",
          }}
          className=" mt-5 text-start text-lg md:mx-auto md:mt-10 md:text-center text-gray-400 text-md max-w-4xl  mb-10"
        >
          Here are some of the projects I’ve been working on recently. These
          reflect my growing skills in frontend and backend development using
          tools like HTML, CSS, JavaScript, React, Node.js, and Tailwind CSS.
          I’m always building and learning, so stay tuned for more!
        </motion.p>
      </div>
      {/* project description */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          type: "tween",
          delay: 0.6,
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 backdrop-blur-3xl "
      >
        {projects.map((item) => {
          return (
            <div key={item.id} className="pl-3">
              <div
                onMouseEnter={() => setDesc({ [item.id]: true })}
                onMouseLeave={() => setDesc({ [item.id]: false })}
                className="border relative overflow-hidden h-[280px] w-full  md:h-[280px] md:min-w-[300px] lg:min-w-[200px] border-[#4bd3a8ca]/30   group hover:-translate-[2px] duration-300 ease-in-out"
              >
                <img
                  className="w-full h-full object-fit brightness-80 hover:brightness-95 group-hover:brightness-90 duration-500 ease-in-out transition-all "
                  src={item.image}
                  alt=""
                />
                {/* description */}
                {desc[item.id] && (
                  <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      type: "tween",
                      ease: "easeInOut",
                    }}
                    exit={{ opacity: 0, x: 200 }}
                    className="absolute z-10 top-0 left-0 bg-gradient-to-t from-[#0f192d] to-[#44c49c8a] border border-[#4bd3a8ca] flex flex-col justify-center items-center backdrop-blur-md h-full w-full"
                  >
                    <button className=" rounded-sm hover:bg-[#0f192d] cursor-pointer border border-[#4ad3a8] px-5 py-2  text-white uppercase text-md font-semibold ">
                      Live Demo
                    </button>
                  </motion.div>
                )}
              </div>
              <div className="w-full  font-semibold flex gap-3 justify-between  text-gray-300 mt-3">
                <h1 className=" uppercase ">{item.name}</h1>
                <div className="w-[60%] flex justify-end">
                  {item.techs.map((tech, index) => (
                    <div className="relative" key={index + 1}>
                      <span
                        onMouseEnter={() => handleToolTip(tech.id)}
                        onMouseLeave={() => handleToolTip(tech.id)}
                        className="mr-4  border border-[#4bd3a8ca]/30  px-2 py-1 text-sm bg-[#4bd3a835] rounded-lg text-gray-300"
                      >
                        {tech.name.slice(0, 1)}
                      </span>
                      {showToolTip[tech.id] && (
                        <span className="absolute text-nowrap -bottom-9 bg-black/80 px-3 rounded-lg right-1 z-20">
                          {tech.name}
                        </span>
                      )}{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      <div className="flex justify-center mt-10">
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 border-[#4bd3a8ca] border  text-[#4bd3a8ca] hover:bg-[#4bd3a8ca] font-semibold text-center hover:-translate-1.5 hover:scale-105 transition-color duration-300 hover:text-white cursor-pointer rounded-sm max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
    </section>
  );
};

export default Project;
