import React from "react";
import { useState } from "react";
import {
  Plus,
  Edit3,
  Trash2,
  Filter,
  Search,
  Eye,
  Code,
  Globe,
  Github,
  ExternalLink,
  Calendar,
  Tag,
  Trash,
} from "lucide-react";
import NewProject from "./NewProject";

const DashBoard = () => {
  const [addProject, setaddProject] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      image: "/api/placeholder/300/200",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/user/project",
      createdAt: "2024-03-15",
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Machine learning dashboard with real-time analytics",
      stack: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
      status: "Development",
      image: "/api/placeholder/300/200",
      liveUrl: "",
      githubUrl: "https://github.com/user/ai-dashboard",
      createdAt: "2024-02-10",
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Cross-platform mobile application using React Native",
      stack: ["React Native", "Firebase", "Redux"],
      status: "Live",
      image: "/api/placeholder/300/200",
      liveUrl: "https://app-store-link.com",
      githubUrl: "",
      createdAt: "2024-01-20",
    },
  ]);

  return (
    <section className="relative h-full w-screen">
      <div className="px-4 md:px-25">
        <nav className="text-white flex items-center justify-between pt pb-3 py-10 border-b border-gray-400/20">
          <h1 className="text-gray-200 font-bold text-lg md:text-2xl uppercase ">
            Portfolio Admin
          </h1>{" "}
          <button
            onClick={() => setaddProject(true)}
            className="flex items-center border-none outile-none hover:bg-green-500 cursor-pointer duration-400 bg-[#02a94c] rounded-lg gap-2 px-4 py-3 md:py-1.5"
          >
            <Plus className="w-5 h-5" />
            <h1 className="hidden sm:block"> Add a project</h1>
          </button>
        </nav>
        {/* project options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800/50 p-6 text-white backdrop-blur-sm rounded-md border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 w-fit p-4 rounded-lg">
                <Code />
              </div>
              <div>
                <p className="font-sm text-gray-400">Total Projects</p>
                <h1 className="font-bold text-xl">3</h1>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 p-6 text-white backdrop-blur-sm rounded-md border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 w-fit p-4 rounded-lg">
                <Edit3 />
              </div>
              <div>
                <p className="font-sm text-gray-400">In development</p>
                <h1 className="font-bold text-xl">3</h1>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 p-6 text-white backdrop-blur-sm rounded-md border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 w-fit p-4 rounded-lg">
                <Globe />
              </div>
              <div>
                <p className="font-sm text-gray-400">Live projects</p>
                <h1 className="font-bold text-xl">3</h1>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 p-6 text-white backdrop-blur-sm rounded-md border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-violet-500 w-fit p-4 rounded-lg">
                <Tag />
              </div>
              <div>
                <p className="font-sm text-gray-400">Tech stacks</p>
                <h1 className="font-bold text-xl">3</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* search  and filter*/}
          <div className="flex flex-col sm:flex-row  justify-between items-center my-15">
            <div className="flex-1 w-full sm:max-w-[43vw] relative border-white/30 shadow-inner h-12 py-0.5 border   rounded-md bg-gray-900/90 backdrop-blur-sm">
              <Search className="absolute top-2 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Seach Projects..."
                className="w-full h-full  text-white py-2 sm:py-0 pl-12 border-none outline-none"
              />
            </div>
            <div className="self-end mt-5 sm:mt-0 sm:self-auto flex items-center gap-2 ml-12">
              <Filter className=" text-gray-300" />
              <div>
                <div className=" border-white/30 shadow-inner h-10 py-0.5 border inline-block  rounded-md bg-gray-900/50 backdrop-blur-sm">
                  <select
                    placeholder="Seach Projects..."
                    className="w-full h-full  text-white pl-4 border-none outline-none bg-gray-800/50 capitalize"
                  >
                    <option
                      className="bg-gray-800 p-2 text-sm sm:text-lg "
                      value="all"
                    >
                      All
                    </option>
                    <option className="bg-gray-800 p-2 " value="react">
                      react
                    </option>
                    <option className="bg-gray-800 p-2 " value="react-native">
                      react-native
                    </option>
                    <option className="bg-gray-800 p-2 " value="next js">
                      next js
                    </option>
                    <option className="bg-gray-800 p-2 " value="node js">
                      node js
                    </option>
                    <option className="bg-gray-800 p-2 " value="mongo db">
                      mongo db
                    </option>
                    <option className="bg-gray-800 p-2 " value="python">
                      python
                    </option>
                    <option className="bg-gray-800 p-2 " value="php">
                      php
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/*  projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
            {projects.map((item) => {
              return (
                <div className="bg-gray-800/50 text-white backdrop-blur-sm rounded-md border border-white/20">
                  <div className="relative w-full bg-gradient-to-bl from-white/20 to-0 h-60">
                    <p className="absolute top-0 right-0 m-2 text-sm text-green-400  bg-green-500/20 inline-block px-2 rounded-full border border-green-400/50">
                      Live
                    </p>
                    {projects.image ? (
                      <img src={projects.image} alt="" />
                    ) : (
                      <div className=" text-gray-400  flex items-center h-full w-full">
                        <Code className=" m-auto h-15 w-20" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h1 className="font-bold text-xl">{item.title}</h1>
                    <p className="text-sm text-gray-400 fonr-semibold my-3">
                      {item.description}
                    </p>
                    <div className="flex gap-3 mt-3">
                      {item.stack.map((tech) => {
                        return (
                          <span className="rounded-md text-gray-300 text-sm bg-gray-600/30 backdrop-blur-md border border-white/20 px-2 py-0.5">
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-gray-400 text-sm ">
                        <span className="inline-block pr-3 ">
                          <Calendar className="w-5 " />
                        </span>
                        <span className="inline-block">{item.createdAt}</span>
                      </div>
                      <div className="flex gap-6   p-2">
                        <ExternalLink className="w-4 text-gray-400" />
                        <Github className="w-4 text-gray-400" />
                        <Edit3 className="w-4 text-gray-400" />
                        <Trash className="w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {addProject && (
        <section className="absolute top-0  left-0 h-full w-full">
          <NewProject addProject={addProject} setaddProject={setaddProject} />
        </section>
      )}
    </section>
  );
};

export default DashBoard;
