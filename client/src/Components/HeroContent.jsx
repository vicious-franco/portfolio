import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utilis/motion";
import { HiSparkles } from "react-icons/hi2";
import stackIcons from "../assets/dev assets/mainIconsdark.svg";
import avatar from "../assets/dev assets/projects/avatar.png";
import { socialIcons } from "../assets/data";
import Typewriter from "typewriter-effect";

const HeroContent = () => {
  const [readMore, setreadMore] = useState(false);

  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="visible"
      className="flex min-h-screen flex-col-reverse md:flex-row items-center mt-10 w-full z-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="py-[4px] sm:py-[15px] px-2 sm:px-4 welcome-box border border-[#0eac7ab1] opacity-[0.9]"
        >
          <HiSparkles className="text-[#22d096c2] mr-10 h-5 w-5" />
          <h1 className="welcome-text text-[10px] sm:text-[13px]">
            Web developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col mt-6 gap-6  font-bold text-gray-300 w-auto h-auto"
        >
          <div className="text-2xl leading-8 w-full text-wrap inline-block overflow-hidden text-start  items-center">
            Hi, I'm
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mx-4 text-transparent text-nowrap  bg-clip-text bg-gradient-to-r from-[#10b981] to-cyan-600"
            >
              <span className="hidden sm:inline">IRAKARAMA</span>
              <span className="hidden sm:inline"> Jean</span>{" "}
              <span className="hidden sm:inline">Francois</span>
              <span className="sm:hidden">I.J.F</span>
              <span> Leon</span>
            </motion.span>
            <br />
            <span className="flex text-gray-300/95 gap-2 text-3xl sm:text-5xl text-nowrap">
              I am
              <h1 className="inline-block "></h1>{" "}
              <Typewriter
                options={{
                  strings: ["a Web developer", "and", "IT Technician"],
                  autoStart: true,
                  delay: 200,
                  loop: true,
                  wrapperClassName:
                    "text-transparent inline-block bg-clip-text bg-gradient-to-r from-[#10b981] to-cyan-600",
                  cursorClassName: "text-cyan-600",
                }}
              />
            </span>
          </div>
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`text-lg text-gray-400 mt-5 max-w-[800px]  ${
              readMore ? "line-clamp-none" : "line-clamp-3 lg:line-clamp-none"
            }`}
          >
            I’m currently an IT student at RP College of Kigali, passionate
            about building clean, responsive, and user-friendly web
            Applications. I specialize in tools like HTML, CSS, JavaScript,
            React, Node.js, Express, and Tailwind CSS. I'm always eager to learn
            and grow, and I approach every project with curiosity, care, and a
            strong focus on quality. Thanks for stopping by — I’d truly love the
            opportunity to connect and build something great together!
          </motion.p>
          <span
            onClick={() => setreadMore((prev) => !prev)}
            className="lg:hidden inline-block text-[#4bd3a8ca] cursor-pointer hover:text-[#4bd3a8f0]"
          >
            {!readMore ? " Read More" : "Show Less"}
          </span>{" "}
        </div>
        <motion.a
          href="#contacts"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          className="py-2 border-[#4bd3a8ca] border text-[#4bd3a8ca] hover:bg-[#4bd3a8ca] font-semibold text-center hover:-translate-1.5 hover:scale-105 transition-color duration-300 hover:text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Say Hello!
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex w-full h-full justify-center item-center"
      >
        <img
          src={avatar}
          className="bounce"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
      {/* socials */}
      <div className="hidden  overflow-hidden ml-5 lg:ml-15 sm:flex justify-end items-center flex-col gap-10 w-10 h-[80vh] text-gray-300 fixed left-0 bottom-0 ">
        <div className="flex flex-col justify-center items-center gap-4 h-full ">
          {socialIcons.map(({ icon: Icon, color, link }, index) => {
            return (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4bd3a8ca] duration-400 hover:text-2xl text-xl cursor-pointer"
                key={index + 1}
              >
                <Icon />
              </a>
            );
          })}
          <hr color="#c7cbd3" className="w-[1.8px] h-30 " />

          <span className="text-nowrap mt-6 -rotate-90 mb-8 text-md font-semibold capitalize">
           contact me
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
