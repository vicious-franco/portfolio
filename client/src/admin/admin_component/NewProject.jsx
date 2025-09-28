import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const NewProject = ({ setaddProject }) => {
  const navigate = useNavigate();
  return (
    <section className="relative h-full bg-black/30 backdrop-blur-sm w-full flex items-center justify-center">
      <div className="absolute top-10">
        <motion.form
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{
            duration: 0.4,
            type: "tween",
            transitionBehavior: 10,
            ease: "easeInOut",
          }}
          className="flex capitalize flex-col text-white bg-[#1c2532] p-8 rounded-lg w-[80vw] sm:w-[60vw] lg:w-[35vw] space-y-10"
        >
          <div>
            <h1 className="text-center font-bold text-2xl capitalize">
              Add new project
            </h1>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-100 mb-2" htmlFor="title">
              project title
            </label>
            <input
              className="rounded-md px-4 py-1 bg-[#2b3544]"
              placeholder="Enter The Project Title"
              type="text"
              id="title"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-100 mb-2" htmlFor="description">
              description
            </label>
            <textarea
              type="text"
              id="description"
              className="bg-[#2b3544] rounded-md p-4"
              placeholder="Describe your Project"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-100 mb-2" htmlFor="Tech">
              Tech stack
            </label>

            <select
              name="status"
              id="status"
              className="rounded-md px-4 py-2 bg-[#2b3544]"
            >
              <option value="choose a status" defaultValue={true}>
                choose a status
              </option>
              <option value="Development">Development</option>
              <option value="Live">Live</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-100 mb-2" htmlFor="Live URL">
              Live URL(optional)
            </label>
            <input
              className="rounded-md px-4 py-1 bg-[#2b3544]"
              type="Live URL"
              id="Live URL"
              placeholder="http://yourProject.com"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-100 mb-2" htmlFor="GitHub">
              GitHub Url
            </label>
            <input
              className="rounded-md px-4 py-1 bg-[#2b3544]"
              type="github"
              id="GitHub"
              placeholder="Add a Github Link"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setaddProject(false)}
              className="py-1.5 px-2 md:px-10 rounded-md border border-white/10 bg-gray-600/40 cursor-pointer hover:bg-gray-700 duration-400"
            >
              Cancel
            </button>
            <button className="py-1.5 px-2 md:px-6 rounded-md bg-green-600 hover:bg-green-500 cursor-pointer duration-400">
              Add project
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default NewProject;
