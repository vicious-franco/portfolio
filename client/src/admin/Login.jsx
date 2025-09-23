import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";

const Login = () => {
  return (
    <div className="text-gray-200  min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <form className=" p-8 inline-block rounded-lg border border-[#02a94c]/30 bg-green-500/2  w-[90%] sm:w-[30em] ">
          <div className="text-center flex items-center justify-center mb-5 gap-1">
            <span className="text-[#02a94c] text-3xl md:text-4xl bg-gradient-to-b from-white/10 to-[#02a94c] bg-clip-text bg-transparent">
              <AiOutlineLogin />
            </span>
            <h1 className="font-bold uppercase text-4xl  bg-gradient-to-b from-white/10 to-green-500 text-transparent bg-clip-text">
              Login
            </h1>
          </div>
          <div className="flex flex-col gap-4 mb-3">
            <div className="flex flex-col gap-5 ">
              <div>
                <p className="capitalize mb-3 font-semibold text-gray-300">
                  email
                </p>
                <div className="shadow-[inset_0px_0px_4px_#02a94c] px-4 py-2.5  rounded-full  ">
                  <input
                    className="outline-none"
                    type="Email"
                    placeholder="email"
                  />
                </div>
              </div>
              <div>
                <p className="capitalize mb-3 font-semibold text-gray-300">
                  password
                </p>
                <div className="shadow-[inset_0px_0px_4px_#02a94c]  px-4 py-2.5  rounded-full   ">
                  <input
                    className="outline-none"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="capitalise bg-gradient-to-b font-bold text-4ray-200 from-0 to-green-500/40 border border-green-800 capitalize rounded-full outline-none py-2 my-4"
            >
              sign in
            </button>
            <p className="text-center capitalize ">
              forget a password?{" "}
              <span className="capitalise text-green-600 underline  cursor-pointer">
                click here{" "}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
