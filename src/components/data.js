import img1 from "../images/3.jpg";
import img2 from "../images/portfolio-2.jpg";
import img3 from "../images/portfolio-3.jpg";
import img4 from "../images/portfolio-4.jpg";
import img5 from "../images/portfolio-5.jpg";
import img6 from "../images/portfolio-6.jpg";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { AiOutlineSolution } from "react-icons/ai";
import { MdSecurityUpdateGood } from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import { BsFillCloudFog2Fill } from "react-icons/bs";
import { SiMicrostrategy } from "react-icons/si";

export const projects = [
  {
    id: 1,
    image: img1,
    desc: "Hello World",
    category: "Web Design",
  },
  {
    id: 2,
    image: img2,
    desc: "Hello World",
    category: "IT",
  },
  {
    id: 3,
    image: img3,
    desc: "Hello World",
    category: "SEO",
  },
  {
    id: 4,
    image: img4,
    desc: "Hello World",
    category: "Website",
  },
  {
    id: 5,
    image: img5,
    desc: "Hello World",
    category: "Frontend",
  },
  {
    id: 6,
    image: img6,
    desc: "Hello World",
    category: "IT",
  },
];

export const services = [
  { id: 1, title: "Payment Management", image: <BsCreditCard2FrontFill /> },
  { id: 2, title: "Corporate Solutions", image: <AiOutlineSolution /> },
  { id: 3, title: "Data Security", image: <MdSecurityUpdateGood /> },
  { id: 4, title: "Business Tracking", image: <TbBusinessplan /> },
  { id: 5, title: "Cloud Computing", image: <BsFillCloudFog2Fill /> },
  { id: 6, title: "Business Strategy", image: <SiMicrostrategy /> },
];
