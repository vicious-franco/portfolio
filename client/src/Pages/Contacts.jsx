import React, { useContext, useRef, useEffect } from "react";
import avatar from "../assets/dev assets/projects/avatar.png";
import { socialIcons } from "../assets/data";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs, { sendForm } from "@emailjs/browser";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { MdDone } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";

const Contacts = () => {
  const { setShowToast } = useContext(GlobalContext);
  const { toastInfo, setToastInfo } = useContext(GlobalContext);

  const removeToast = () => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("sent");
          setShowToast(true);
          setToastInfo({
            message: "Message Sent",
            detail: "we'll get back to you soon",
            color: "#12b782",
            Icon: <MdDone />,
            iconBg: "#3cc59a",
          });
          console.log(result.status);
          form.current.reset();
        },
        (error) => {
          setShowToast(true);
          setToastInfo({
            message: "Error",
            detail: "message not sent, please try again",
            color: "#e53935",
            Icon: <MdErrorOutline />,
            iconBg: "#e53935",
          });

          console.log("not sent");
        }
      );
  };

  return (
    <section id="contacts" className="relative  w-full my-20  min-h-[80vh]  ">
      <motion.h2
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          type: "tween",
        }}
        className="text-4xl font-extrabold text-center  text-white/85 uppercase tracking-wide"
      >
        Contact <span className="text-[#4bd3a8ca]">Me </span>
      </motion.h2>
      <hr className="w-35 m-[18px_auto] border-t-2 border-[#4bd3a8ca]/50" />
      <motion.p
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "tween",
        }}
        className="w-[80%] lg:m-auto text-gray-400 text-start lg:text-center text-lg"
      >
        I’m always open to new opportunities, collaborations, or just a friendly
        chat about tech. Whether you have a project in mind or want to connect,
        feel free to reach out I’d love to hear from you!
      </motion.p>
      {/*background div  */}
      <div className="my-20 h-full">
        <div className="w-full p-2 backdrop-blur-2xl  h-full">
          {/* parent */}
          <div className="flex flex-col lg:flex-row h-[30em] gap-4 w-full">
            {/* section 1 */}
            <div className="w-full bg-[#218b6a]/90 sm:relative top-0 sm:-top-12 sm:left-2 h-[34em] lg:max-w-[40%] rounded-md p-3">
              <div className="flex  items-center text-xl gap-3 font-black">
                <p className="inline-block text-lg  text-white bg-[#0f192d] rounded-sm p-2">
                  LN
                </p>
                <span className="text-[#0f192d]">Leon</span>
              </div>
              <div className="w-full max-w-[12em] md:min-w-[18.5em]  m-auto">
                <motion.img
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                  }}
                  src={avatar}
                  className="scale-145 sm:scale-125"
                  alt="avatar image"
                />
              </div>
              <div className="flex items-center justify-center my-6 ">
                <div className="flex tracking-wider gap-2  items-center flex-col  text-[#0f192d] font-semibold">
                  <span className="flex items-center gap-3">
                    <FaPhone />
                    <p>+250 787 723 189</p>
                  </span>
                  <span className="flex items-center  gap-3">
                    <MdEmail />
                    <p>irakamale@gmail.com</p>
                  </span>
                  <span className="flex items-center gap-3">
                    <FaLocationCrosshairs />
                    <p>Kigali, Rwanda</p>
                  </span>
                </div>
              </div>
              <div className="flex animate-bounce justify-center gap-4 text-lg md:text-xl text-gray-300">
                {socialIcons.map(({ icon: Icon, color, link }, index) => (
                  <a
                    href={link}
                    target="_blank"
                    key={index + 1}
                    className="p-1 rounded-lg  text-xl shadow-[0_1px_8px_rgba(255,255,255,0.3)]"
                    style={{ background: color }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* section 2 */}
            <div className="w-full border border-[#4bd3a8ca]/90 bg-gradient-to-b to-[#185c465d] from-35%  backdrop-blur-2xl rounded-md text-white flex-1 ">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="px-10 flex flex-col gap-8 pb-6 w-full "
              >
                <div className="flex  flex-col lg:flex-row justify-center mt-20 gap-10 ">
                  <input
                    name="user_name"
                    required
                    type="text"
                    placeholder="First Name"
                    className="border px-3 rounded-sm border-[#4bd3a8ca] flex-grow-1 flex-shrink-1 p-2 outline-none"
                  />
                  <input
                    type="text"
                    required
                    name="user_lastname"
                    placeholder="Last Name"
                    className="border px-3 rounded-sm border-[#4bd3a8ca] flex-grow-1 flex-shrink-1 p-2 outline-none"
                  />
                </div>
                <div className="w-full ">
                  <input
                    type="text"
                    required
                    name="email"
                    placeholder="Email"
                    className="border px-3 rounded-sm border-[#4bd3a8ca] flex-grow-1 w-full p-2 outline-none"
                  />
                </div>
                <div className="w-full max-h-50 ">
                  <textarea
                    name="message"
                    required
                    className="border px-3 min-h-30 max-h-full rounded-sm border-[#4bd3a8ca] flex-grow-1 w-full  outline-none"
                  ></textarea>
                </div>
                <div className="w-full flex justify-center">
                  <button
                    onClick={removeToast}
                    className="bg-[#4bd3a8ca] cursor-pointer hover:bg-[#4bd3a8f4] px-2 py-1 md:px-3 md:py-2 rounded-md font-semibold "
                  >
                    Send Message
                  </button>
                </div>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
