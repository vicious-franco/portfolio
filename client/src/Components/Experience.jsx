import { easeInOut, motion } from "framer-motion";
import React from "react";
import { MdBusinessCenter } from "react-icons/md";

const experiences = [
  {
    id: 1,
    title: "Windows Server Intern",
    company: "Tech Wise Ltd",
    date: "Apr 2023 – May 2023",
    description:
      "Assisted in server setup, Active Directory basics, and troubleshooting network issues.",
  },
  {
    id: 2,
    title: "Network Technician Intern",
    company: "His First Team Ltd",
    date: "Apr 2022 – May 2022",
    description:
      "Configured LAN networks, performed cabling, and diagnosed connectivity problems.",
  },
  {
    id: 3,
    title: "Infrastructure Intern",
    company: "Saltel Ltd",
    date: "Apr 2021 – May 2021",
    description:
      "Installed trunking systems and managed cable routing for structured network infrastructure.",
  },
];

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: easeInOut, type: "tween" }}
      id="background"
      className="w-full  mx-auto my-3 md:py-12 backdrop-blur-5xl duration-300  text-gray-300"
    >
      <h2 className="text-4xl w-full text-center font-extrabold  mb-22 text-white/85 uppercase tracking-wide">
        <span>Education &</span>{" "}
        <span className="text-[#4bd3a8ca]">experience </span>
        <hr className="w-35 m-[18px_auto] border-t-2 border-[#4bd3a8ca]/50" />
      </h2>

      <div className="grid gap-10 lg:grid-cols-2 ">
        {/* Education Block */}
        <div className="space-y-2 w-full border-[#4bd3a8ca]/60 backdrop-blur-3xl hover:shadow-[1px_1px_10px_#4bd3a8ca] duration-500 ease-in-out hover:-translate-1.5  h-full border rounded-md flex flex-col justify-start p-5  bg-[#4bd3a8ca]/6">
          <h3 className="text-2xl font-semibold mb-4 text-[#4bd3a8ca]">
            🎓 Education
          </h3>
          <p className="text-lg font-semibold uppercase">
            RP College of Kigali
          </p>
          <p className="text-sm text-gray-400">
            Advanced Diploma in Information Technology — 2024 - Present
          </p>
          <p className="mt-2 text-gray-300">
            Learning full-stack development, networking, and systems
            administration. Passionate about building strong technical
            foundations.
          </p>

          <hr className="my-4 border-[#4bd3a8ca]/20" />

          <p className="text-lg font-medium">World Mission High School</p>
          <p className="text-sm text-gray-400">
            A2 Certificate in Computer Science — 2021 - 2023
          </p>
          <p className="mt-2 text-gray-300">
            Graduated among the top 3 in class. Led server admin group projects
            and served as class monitor.
          </p>
        </div>

        {/* Experience Block */}
        <div
          className="
        space-y-2 w-full  border-[#4bd3a8ca]/60 backdrop-blur-3xl hover:shadow-[1px_1px_10px_#4bd3a8ca] duration-500 ease-in-out hover:-translate-1.5  h-full border  rounded-md flex flex-col justify-start p-5 bg-[#4bd3a8ca]/6"
        >
          <h3 className="text-2xl upper font-semibold mb-4 text-[#4bd3a8ca]">
            💼 Experience
          </h3>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <p className="text-lg font-medium">{exp.title}</p>
              <p className="text-sm text-[#4bd3a8ca]">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="mt-1 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
