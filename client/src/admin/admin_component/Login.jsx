import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { baseUrl } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = userCredentials;
      const req = await fetch(`${baseUrl}/api/portfolio/login`, {
        credentials: "include",
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const res = await req.json();
      if (res.success) {
        console.log(res.success)
        navigate("/auth/secret/admin/dashboard");

      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="text-gray-200  min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <form
          onSubmit={loginUser}
          className=" p-8 inline-block rounded-lg border border-[#02a94c]/30 bg-green-500/2  w-[90%] sm:w-[30em] "
        >
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
                    onChange={(e) =>
                      setUserCredentials((prev) => {
                        return { ...prev, email: e.target.value };
                      })
                    }
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
                    onChange={(e) =>
                      setUserCredentials((prev) => {
                        return { ...prev, password: e.target.value };
                      })
                    }
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
