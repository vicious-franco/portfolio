import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          type: "tween",
        }}
        className="text-4xl font-extrabold text-center  text-white/85 uppercase tracking-wide"
      >
        About <span className="text-[#02a94c]">Me </span>
      </motion.h2>
      <hr className="w-35 m-[18px_auto] border-t-2 border-[#02a94c]/50" />

      <div className="w-full  bg-[#02a94c]/6  flex md:flex-row flex-col-reverse mx-auto my-10 p-10 backdrop-blur-5xl rounded-xl border duration-300  hover:shadow-[0px_3px_12px_#02a94c] hover:-translate-[2px] ease-in-out  border-[#02a94c]/40 shadow-md shadow-white/10  text-gray-300 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-[18em] lg:min-w-[20em] lg:max-w-[28em] m-auto"
        >
          <img src="/avatar.png" alt="" />
        </motion.div>
        <div className="lg:w-[50%] space-y-6 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl mb-8 font-semibold bg-clip-text bg-gradient-to-r from-[#02a94c] to-cyan-400 text-transparent "
          >
            I am a Web Developer
          </motion.h1>
          <div>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-lg text-gray-400 leading-relaxed mb-4"
            >
              Hi 🖐️, I’m{" "}
              <span className="text-[#b0f9e2bf] font-semibold">Leon</span>{" "}
              <br /> a passionate web developer and IT student based in Kigali.
              I love crafting clean, responsive, and futuristic web apps using{" "}
              <span className="text-[#02a94c] font-medium">
                HTML, CSS, JavaScript, React, Node.js, Express,
              </span>{" "}
              and{" "}
              <span className="text-[#02a94c] font-medium">Tailwind CSS</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3 }}
              className="text-lg leading-relaxed text-gray-400 mb-4"
            >
              Always curious and eager to learn, I approach every project with
              creativity and a strong focus on quality. Whether working solo or
              with a team, I enjoy solving problems and building meaningful
              digital experiences.
            </motion.p>

            <a href="#contacts">
              {" "}
              <motion.button
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.6 }}
                className="outline-none mt-2 cursor-pointer px-3 py-1 bg-[#02a94c] hover:bg-transparent hover:border hover:border-[#02a94c] hover:text-[#02a94c] hover:outline-none duation-300 rounded-sm text-black font-semibold "
              >
                Let’s connect
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
