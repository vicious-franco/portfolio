import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// skills icons
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

// project images
import accordion from "./dev assets/projects/accordion.png";
import spotify from "./dev assets/projects/spotify-clone.png";
import stripe from "./dev assets/projects/stripe.png";
import milacurous from "./dev assets/projects/Milacurous.png";
import Etutor from "./dev assets/projects/E-tutor.png";
import ReadMore from "./dev assets/projects/Read More.png";

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

// projects

export const projects = [
  {
    id: 1,
    name: "Stripe",
    image: stripe,
    techs: [
      { id: 10, name: "React" },
      { id: 11, name: "Tailwind" },
    ],
  },
  {
    id: 2,
    name: "Accordion",
    image: accordion,
    techs: [
      { id: 12, name: "React" },
      { id: 13, name: "Tailwind" },
    ],
  },
  {
    id: 3,
    name: "Milacurous",
    image: milacurous,
    techs: [
      { id: 14, name: "Mongo" },
      { id: 15, name: "Express Js" },
      { id: 16, name: "React" },
      { id: 17, name: "Tailwind" },
    ],
  },
  {
    id: 4,
    name: "Spotify clone",
    image: spotify,
    techs: [
      { id: 18, name: "Mongo" },
      { id: 19, name: "Express Js" },
      { id: 20, name: "React" },
      { id: 21, name: "Tailwind" },
    ],
  },
  {
    id: 5,
    name: "E-Tutor",
    image: Etutor,
    techs: [
      { id: 22, name: "React" },
      { id: 23, name: "Tailwind" },
    ],
  },
  {
    id: 6,
    name: "Tours",
    image: ReadMore,
    techs: [
      { id: 24, name: "React" },
      { id: 25, name: "Tailwind" },
    ],
  },
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
