import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { useState } from "react";

const NewProject = ({ setaddProject }) => {
  const [techStacks, settechStacks] = useState([]);
  const handleStacks = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      settechStacks((prev) => [...prev, value]);
      console.log(techStacks);
    }
  };
  const navigate = useNavigate();
  return (
    <section className=" h-screen fixed top-0 right-0 overflow-hidden sm:overflow-auto bg-black/30 backdrop-blur-sm w-full flex items-center justify-center">
      <div className=" ">
        <motion.form
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{
            duration: 0.4,
            type: "tween",
            transitionBehavior: 10,
            ease: "easeInOut",
          }}
          className="flex h-screen sm:h-[90vh] capitalize flex-col text-white bg-[#1c2532] p-8 sm:rounded-lg w-screen sm:w-[60vw] lg:w-[38vw] space-y-10"
        >
          <div>
            <h1 className="text-center font-bold text-2xl capitalize">
              Add new project
            </h1>
          </div>
          <div className="flex   capitalize flex-col space-y-7 overflow-auto custom-scroll">
            <div className="flex flex-col mx-4">
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
            <div className="flex flex-col mx-4">
              <label className="text-gray-100 mb-2" htmlFor="title">
                project file
              </label>
              <input
                className="rounded-md px-4 py-1 bg-[#2b3544]"
                placeholder="Enter The Project Title"
                type="file"
                name="image"
                id="title"
              />
            </div>
            <div className="flex flex-col mx-4">
              <label className="text-gray-100 mb-2" htmlFor="title">
                github link
              </label>
              <input
                className="rounded-md px-4 py-1 bg-[#2b3544]"
                placeholder="https://github.com/octocat/example"
                type="text"
                name="image"
                id="title"
              />
            </div>
            <div className="flex flex-col mx-4">
              <label className="text-gray-100 mb-2" htmlFor="title">
                live link
              </label>
              <input
                className="rounded-md px-4 py-1 bg-[#2b3544]"
                placeholder="https://exam.com"
                type="text"
                name="image"
                id="title"
              />
            </div>
            <div className="flex flex-col mx-4">
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
            {/* Tech stacks */}
            <div className="flex flex-col mx-4">
              <div className="flex justify-between">
                <div className="flex flex-col  w-full">
                  <label className="text-gray-100 mb-2" htmlFor="stacks">
                    Select Tech Stacks
                  </label>
                  <div className="bg-[#2b3544] rounded-md px-4 py-2">
                    <div className="gap-3 flex flex-col md:flex-row md:justify-between p-2 ">
                      <div>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value="React js"
                            className="accent-blue-500"
                          />
                          <span>React js</span>
                        </label>

                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value="Mongo DB"
                            className="accent-green-500"
                          />
                          <span>Mongo DB</span>
                        </label>
                      </div>
                      <div>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value="Python"
                            className="accent-yellow-500"
                          />
                          <span>Python</span>
                        </label>

                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value="Express js"
                            className="accent-gray-500"
                            onClick={handleStacks}
                          />
                          <span>Express js</span>
                        </label>
                      </div>
                      <div>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value="Node js"
                            className="accent-green-600"
                          />
                          <span>Node js</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-4">
              <label className="text-gray-100 mb-2" htmlFor="Tech">
                project status
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

            <div className="flex justify-between mx-4">
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
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default NewProject;
