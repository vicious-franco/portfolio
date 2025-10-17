import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// skills icons
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";

export const socialIcons = [
  {
    id: 1,
    icon: FaGithub,
    color: "#181717",
    link: "https://github.com/vicious-franco",
  },
  {
    id: 2,
    icon: FaInstagram,
    color: "#E1306C",
    link: "https://www.instagram.com/_____leon_____________?igsh=MWRmZWYyZTY0anYydQ== ",
  },
  {
    id: 3,
    icon: FaWhatsapp,
    color: "#25D366",
    link: "https://wa.me/250787723139",
  },
  {
    id: 4,
    icon: BiLogoGmail,
    color: "#D14836",
    link: "mailto:irakaramale@gmail.com",
  },
  {
    id: 5,
    icon: FiLinkedin,
    color: "#0A66C2",
    link: "https://www.linkedin.com/in/irakarama-jean-francois-leon-070831278",
  },
];

export const skillIcons = [
  { name: "React", Icon: FaReact, color: "#38bdf8" }, // text-sky-400
  { name: "HTML5", Icon: FaHtml5, color: "#f97316" }, // text-orange-500
  { name: "CSS3", Icon: FaCss3Alt, color: "#3b82f6" }, // text-blue-500
  { name: "JavaScript", Icon: FaJs, color: "#facc15" }, // text-yellow-400
  { name: "Node.js", Icon: FaNodeJs, color: "#22c55e" }, // text-green-500
  { name: "Express.js", Icon: SiExpress, color: "#d1d5db" }, // text-gray-300
  { name: "MongoDB", Icon: SiMongodb, color: "#16a34a" }, // text-green-600
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "#22d3ee" }, // text-cyan-400
  { name: "GitHub", Icon: FaGithub, color: "#ffffff" }, // text-white
];

export const frontEndSkills = [
  { name: "Html", rate: 97 },
  { name: "css", rate: 70 },
  { name: "Tailwind css", rate: 75 },
  { name: "Javascript", rate: 75 },
  { name: "React js", rate: 70 },
];
export const BackendSkills = [
  { name: "Node js", rate: 97 },
  { name: "Express js", rate: 70 },
  { name: "Mongo db", rate: 75 },
];

// navigations Nav Componets

export const navbar = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Skills", link: "skills" },
  { name: "Background", link: "background" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contacts" },
];
