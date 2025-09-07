import HeroContent from "./HeroContent";
import NavBar from "./NavBar";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import AboutMe from "../Pages/AboutMe";
import Skills from "../Pages/Skills";
import Project from "../Pages/Project";
import Contacts from "../Pages/Contacts";
import Experience from "./Experience";

const Hero = () => {
  return (
    <div className="px-8 relative z-10  sm:px-20 lg:px-40 flex flex-col min-h-screen w-full">
      <NavBar />
      <HeroContent />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      <Contacts />
    </div>
  );
};

export default Hero;
