import React, { useContext } from "react";
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
  LogOut,
  FolderPen,
  Calendar,
  Tag,
  Trash,
  Phone,
} from "lucide-react";
import NewProject from "./NewProject";
import { AdminContextAuth } from "../adminContext/AdminContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashBoard = () => {
  const [addProject, setaddProject] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { userData, baseUrl } = useContext(AdminContextAuth);
  const navigate = useNavigate();
  const [projects, setProjects] = useState(null);

  const getProjectData = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/upload/projects`, {
        method: "get",
        headers: { "content-type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("failed to connect DB");
      }
      const data = await res.json();
      if (data.success) {
        setProjects(data.projects);
      }
    } catch (err) {
      console.log("failed to fetchprojects: " + err);
    }
  };
  useEffect(() => {
    getProjectData();
  }, []);

  const makeLogout = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/portfolio/logout`, {
        method: "post",
        credentials: "include",
      });
      const info = await res.json();
      if (info.success) {
        navigate("/auth/secret/admin-login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let nameInitials = null;
  let name = null;
  let lastName = null;
  if (userData) {
    name = userData?.fullName.split(" ");
    lastName = name[name.length - 1];
    nameInitials = (
      name[0].charAt(0) + name[name.length - 1].charAt(0)
    ).toUpperCase();
  }
  const handleLogout = () => {
    setShowProfile((prev) => !prev);
  };

  const liveProjectsCount = projects?.filter((item) => item.isLive).length;
  const devProjectsCount = projects?.filter((item) => !item.isLive).length;
  const techStackCount = projects?.filter((item) => item.techs);
  const newTechs = techStackCount.map((item) => item.techs);
  console.log(newTechs);


  return (
    <section className="relative min-h-screen w-screen">
      <div className="px-4 md:px-25">
        <nav className="relative text-white flex items-center justify-between pt pb-3 py-10 border-b border-green-400/40">
          <div className=" flex flex-col items-center gap-2 ">
            <span
              onClick={handleLogout}
              className="cursor-pointer rounded-full p-1  bg-green-600/20 border border-green-500 h-12 w-12 flex items-center justify-center "
            >
              <h1 className=" text-white font-semibold text-xl ">
                {nameInitials}
              </h1>{" "}
            </span>
          </div>

          <button
            onClick={() => setaddProject(true)}
            className="flex items-center border-none outile-none hover:bg-green-500 cursor-pointer duration-400 bg-[#02a94c] rounded-lg gap-2 px-4 py-3 md:py-1.5"
          >
            <Plus className="w-5 h-5" />
            <h1 className="hidden sm:block"> Add a project</h1>
          </button>

          {showProfile && (
            <div
              onMouseLeave={handleLogout}
              className=" w-full sm:w-auto left-0 absolute  flex flex-col gap-2 text-sm xl:text-md text-gray-300 top-24 z-10 bg-[#001012] rounded-md p-4 py-5 border-2 border-green-500/30 "
            >
              <div>
                <div className="flex font-semibold  gap-2 items-center border-b border-green-500/40 pb-3">
                  <span className=" rounded-full p-1  bg-green-600/20 border border-green-500 h-10 w-10 flex items-center justify-center ">
                    <h1 className=" text-white text-xl ">{nameInitials}</h1>{" "}
                  </span>
                  <div className="">
                    <p className="">{userData?.email}</p>
                    <p className="">{lastName}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 pt-2">
                <Phone className="w-4" />
                <p className="">{userData?.phone_number}</p>
              </div>

              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <LogOut className="w-4" />
                <p
                  onClick={makeLogout}
                  className="text-md cursor-pointer hover:text-green-500"
                >
                  Logout
                </p>
              </div>
              <p className="uppercase text-center font-light">
                {userData?.dev_name}
              </p>
            </div>
          )}
        </nav>
        {/* project options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-green-800/30 p-6 text-white backdrop-blur-sm rounded-md border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 w-fit p-4 rounded-lg">
                <Code />
              </div>
              <div>
                <p className="font-sm text-gray-400">Total Projects</p>
                <h1 className="font-bold text-xl">{projects?.length}</h1>
              </div>
            </div>
          </div>
          <div className="bg-green-800/30 p-6 text-white backdrop-blur-sm rounded-md border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 w-fit p-4 rounded-lg">
                <Edit3 />
              </div>
              <div>
                <p className="font-sm text-gray-400">In development</p>
                <h1 className="font-bold text-xl">{devProjectsCount}</h1>
              </div>
            </div>
          </div>
          <div className="bg-green-800/30 p-6 text-white backdrop-blur-sm rounded-md border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 w-fit p-4 rounded-lg">
                <Globe />
              </div>
              <div>
                <p className="font-sm text-gray-400">Live projects</p>
                <h1 className="font-bold text-xl">{liveProjectsCount}</h1>
              </div>
            </div>
          </div>
          <div className="bg-green-800/30 p-6 text-white backdrop-blur-sm rounded-md border border-white/20">
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
            <div className="flex-1 w-full sm:max-w-[43vw] relative border-green-500/30 shadow-inner h-12 py-0.5 border   rounded-md bg-green-900/15 backdrop-blur-sm">
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
                <div className=" border-green-500/30 shadow-inner h-10 py-0.5 border inline-block  rounded-md bg-green-900/15 backdrop-blur-sm">
                  <select
                    placeholder="Seach Projects..."
                    className="w-full h-full  text-white pl-4 border-none outline-none bg-green-800/15 capitalize"
                  >
                    <option
                      className="bg-green-950/90 p-2 text-sm sm:text-lg "
                      value="all"
                    >
                      All
                    </option>
                    <option className="bg-green-950/90 p-2 " value="react">
                      react
                    </option>
                    <option
                      className="bg-green-950/90 p-2 "
                      value="react-native"
                    >
                      react-native
                    </option>
                    <option className="bg-green-950/90 p-2 " value="next js">
                      next js
                    </option>
                    <option className="bg-green-950/90 p-2 " value="node js">
                      node js
                    </option>
                    <option className="bg-green-950/90 p-2 " value="mongo db">
                      mongo db
                    </option>
                    <option className="bg-green-950/90 p-2 " value="python">
                      python
                    </option>
                    <option className="bg-green-950/90 p-2 " value="php">
                      php
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/*  projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 ">
            {projects?.map((item) => {
              return (
                <div
                  key={item._id}
                  className="bg-gray-800/50 text-white backdrop-blur-sm rounded-md border border-white/20 overflow-hidden "
                >
                  <div className="relative w-full bg-gradient-to-bl from-white/20 to-0 h-60">
                    {item.isLive ? (
                      <p className="absolute top-0 right-0 m-2 text-sm text-green-400  bg-green-500/20 inline-block px-2 rounded-full border border-green-400/50">
                        Live
                      </p>
                    ) : (
                      <p className="absolute top-0 right-0 m-2 text-sm text-orange-400  bg-[#ff6900]/20 inline-block px-2 rounded-full border border-orange-500/50">
                        Dev
                      </p>
                    )}
                    {item.imagePath ? (
                      <img
                        src={`${baseUrl}${item.imagePath}`}
                        alt=""
                        className="object-cover w-full h-full brightness-85 duration-400 ease-in-out cursor-pointer hover:brightness-95"
                      />
                    ) : (
                      <div className=" text-gray-400  flex items-center h-full w-full">
                        <Code className=" m-auto h-15 w-20" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h1 className="font-bold text-xl">{item.projectName}</h1>
                    <p className="text-sm text-gray-400 fonr-semibold my-3">
                      {item.description}
                    </p>
                    <div className="flex gap-3 mt-3">
                      {item.techs.map((tech, index) => {
                        return (
                          <span
                            key={index * 20}
                            className="rounded-md text-gray-300 text-sm bg-gray-600/30 backdrop-blur-md border border-white/20 px-2 py-0.5"
                          >
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
                        <span className="inline-block">
                          {new Date(item.createdAt).toDateString()}
                        </span>
                      </div>
                      <div className="flex gap-6   p-2">
                        <span className="cursor-pointer">
                          <ExternalLink className="w-4 text-gray-400 hover:text-gray-100 ease-in-out hover:w-5 duration-400" />
                        </span>
                        <span className="cursor-pointer">
                          <Github className="w-4 text-gray-400 hover:text-gray-100 ease-in-out hover:w-5 duration-400" />
                        </span>
                        <span className="cursor-pointer">
                          <Edit3 className="w-4 text-gray-400 hover:text-gray-100 ease-in-out hover:w-5 duration-400" />
                        </span>
                        <span className="cursor-pointer">
                          <Trash className="w-4 text-gray-400 hover:text-gray-100 ease-in-out hover:w-5 duration-400" />
                        </span>
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
        <section className="absolute top-0  left-0 min-h-screen w-full">
          <NewProject addProject={addProject} setaddProject={setaddProject} />
        </section>
      )}
    </section>
  );
};

export default DashBoard;
