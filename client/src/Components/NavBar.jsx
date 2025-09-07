import { FaBarsStaggered } from "react-icons/fa6";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { easeInOut, motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { navbar } from "../assets/data";

const NavBar = () => {
  const { isOpen, setIsOpen, showMenu } = useContext(GlobalContext);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.9, type: "tween", ease: easeInOut }}
      className={`${
        showMenu ? "fixed" : "hidden"
      } px-10 md:px-15 border-b-1 border-[#4bd3a8ca]/60 bg-transparent rounded-b-xl left-0 top-0  backdrop-blur-md py-3 shadow-md shadow-[#484468b0] shadow-md/40 w-full text-white z-10`}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center text-xl gap-3 font-black">
          <p className="inline-block text-lg  text-[#020015] bg-[#4bd3a8ca] rounded-sm p-2">
            LN
          </p>
          <span className="text-white/80">Leon</span>
        </div>
        <ul className="hidden lg:flex gap-6 font-semibold text-md">
          {navbar.map((n, i) => (
            <a href={`#${n.link}`} key={i + 1}>
              <li className="hover:border-b-2 text-gray-300 cursor-pointer transform-border duration-300 ease-in-out hover:text-[#4bd3a8ca] hover:border-[#4bd3a8ca] rounded-2xl px-2">
                {n.name}
              </li>
            </a>
          ))}
        </ul>
        <div className="hidden lg:flex gap-3   text-gray-300 items-center">
          <a
            href={`#contacts`}
            className="inline-block ml-3 px-3 cursor-pointer hover:bg-[#4bd3a8ca]  hover:scale-102 transition-all duation-700 hover:text-black  duration-300 ease-in-out text-lg font-semibold text-[#10b981] border border-[#10b981]  rounded-sm p-1"
          >
            Hire Me
          </a>

          <p
            onClick={() => {
              window.open("/Resume.pdf", "_blank");
            }}
            className="inline-block  bg-[#4bd3a8ca] duration-300 hover:bg-transparent hover:outline-[#4bd3a8ca] hover:text-[#4bd3a8ca] hover:outline px-3 p-1 text-lg rounded-sm cursor-pointer  text-black font-semibold tex-md"
          >
            Resume
          </p>
        </div>
        <div className="lg:hidden ">
          <span
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-2xl text-gray-200  cursor-pointer active:text-[#4bd3a8ca]"
          >
            {!isOpen && <FaBarsStaggered />}
          </span>
        </div>
      </div>
      {isOpen && <MobileNav />}
    </motion.nav>
  );
};

export default NavBar;
