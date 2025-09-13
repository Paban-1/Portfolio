import {
  RiDownloadLine,
  RiPencilLine,
  RiBarChart2Fill,
  RiSmartphoneLine,
  RiShieldLine,
  RiTwitterXLine,
  RiMailAiLine,
  RiLinkedinLine,
  RiInstagramLine,
  RiCodeAiFill,
  RiRocket2Fill,
  RiUser3Fill,
} from "@remixicon/react";

import { RocketIcon, Target, Zap, Brain, Handshake } from "lucide-react";



import Profile from "../assets/profileDp.png";
import ProjectPortfolio from "../assets/Project1.png";
import VirtualR from '../assets/AIProject.png'
import InkDrop from '../assets/InkDrop.png'
import Restaura from '../assets/restaura.png'


export default Profile;

export const HeadingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const typingVariants = {
  hidden: { width: "0ch", opacity: 1 },
  visible: (i) => ({
    width: "100%",
    transition: {
      delay: i * 0.5,
      duration: 2,
      ease: "linear",
    },
  }),
};

export const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};
export const ChildVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.5,
    },
  }),
};
export const ChardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const ChardVariantsTwo = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

export const FOOTERDATA = [
  { FooterIcon: RiMailAiLine, className: "bg-[#8afa49]" },
  { FooterIcon: RiTwitterXLine, className: "bg-[#8afa49]" },
  { FooterIcon: RiLinkedinLine, className: "bg-[#8afa49]" },
  { FooterIcon: RiInstagramLine, className: "bg-[#8afa49]" },
];

export const SKILLSSET = [
  {
    ChardVariants: ChardVariants,
    className: "bg-[#FCCE00]",
    text: "HTML",
    describe: "Make Your",
    describeTwo: "Stacture Wonderfull",
  },
  {
    className: "bg-[#94D1AF]",
    text: "JavaScript",
    describe: "Make Your",
    describeTwo: "website functional",
  },
  {
    className: "bg-[#874FD4]",
    text: "TaildWind",
    describe: "Make Your",
    describeTwo: "Website Looks Good",
  },
  {
    className: "bg-[#e22d0e] text-white",
    text: "React.Js",
    describe: "Make Your",
    describeTwo: "Website Scelable",
  },
];



export const PROJECTCHARDDATA = [
  {
    id:1,
    img: ProjectPortfolio,
    ProjectName: "My Portfolio Website ✨",
    stack1: "React",
    stack2: "JavaScrpt",
    stack3: "Tailwnd",
    textStyle: "text-white",
    descriptionStyle: "text-white",
    className: "bg-black",
    className2: "bg-black",
    link:"https://portfolio-lime-zeta-25.vercel.app/"
  },
  {
    id:2,
    img: VirtualR,
    ProjectName: "VirtualR Landing Page✨",
    stack1: "React",
    stack2: "JavaScrpt",
    stack3: "Tailwnd",
    textStyle: "text-white",
    descriptionStyle: "text-white",
    className: "bg-black",
    className2: "bg-black",
  },
  {
    img: InkDrop,
    ProjectName: "InkDrop AI Blog Writing app ✨",
    stack1: "React",
    stack2: "JavaScrpt",
    stack3: "Gemini API",
    textStyle: "text-white",
    descriptionStyle: "text-white",
    className: "bg-black",
    className2: "bg-black",
     link:"https://ink-drop-two.vercel.app/"
  },
  {
    img: Restaura,
    ProjectName: "Restaura Website✨",
     stack1: "React",
    stack2: "JavaScrpt",
    stack3: "Farmar Motion",
    textStyle: "text-white",
    descriptionStyle: "text-white",
    className: "bg-black",
    className2: "bg-black",
  },
  // {
  //   img: InkDrop,
  //   ProjectName: "Demo",
  //   Description: "Demo",
  //   Description2: "Demo",
  //   textStyle: "text-white",
  //   descriptionStyle: "text-white",
  //   className: "bg-black",
  //   className2: "bg-blue-300",
  // },
];

export const DATA = [
  {
    background: "bg-white shadow",
    icon: RiBarChart2Fill,
    Heading: "",
    para: "Real-time analytics",
    paraOne: " Gain actionable",
    paraTwo: " insights with our real-time analytics",
    paraThree: "feature",
  },
  {
    background: "bg-white shadow",
    icon: RiPencilLine,
    Heading: "",
    para: " Customizable reports",
    paraOne: "Streamline your  ",
    paraTwo: "financial processes with automated",
    paraThree: "workflows",
  },
];
export const DATATWO = [
  {
    background: "bg-white shadow",
    icon: RiSmartphoneLine,
    Heading: "",
    para: "Mobile accessibilty",
    paraOne: "manage your  ",
    paraTwo: "finances on the go with our mobile-",
    paraThree: "friendly platform",
  },
  {
    background: "bg-white shadow",
    icon: RiShieldLine,
    Heading: "",
    para: "Enhanced security ",
    paraOne: "Protect your",
    paraTwo: "sensitive financial data with our state ",
    paraThree: "of the art secunity measures",
  },
];

export const ABOUTME = [
  {
    background: "bg-white shadow",
    icon: RocketIcon,
    Heading: "Real-World Project Experience",
    para: "I don't just learn i build.",
    paraOne: " from interactive apps to ",
    paraTwo: " smart UI components.I apply every skill in hands",
    paraThree: "on projects that solve real problems.",
  },
  {
    background: "bg-white shadow",
    icon: Target,
    Heading: "Clean, Morden UI Design",
    para: "I focus on clean layouts  ",
    paraOne: " and responsive design using",
    paraTwo: "Tailwind CSS and React.js, make sure every project",
    paraThree: "looks great and work smoothly on all devices.",
  },
  {
    background: "bg-white shadow",
    icon: Zap,
    Heading: "Fast Learning & Adaptability",
    para: "Whether it's mastering ",
    paraOne: "new libararies or integrating ",
    paraTwo: "APIs, i adapt quickly and stay ahead of the curve",
    paraThree: "  in a fast-changing tech world.",
  },
];

export const NavItems = [
  { href: "#home", label: "HOME", icon: RiUser3Fill },
  { href: "#skill", label: "SKILLS", icon: RiCodeAiFill },
  { href: "#project", label: "PROJECT", icon: RiRocket2Fill },
  { href: "download", label: "DOWNLOAD", icon: RiDownloadLine },
];
