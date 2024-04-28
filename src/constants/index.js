import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Services",
  },
  {
    id: "",
    title: "Projects",
  },
  {
    id: "work",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [

  {
    title: "Graphic Design",
    icon: web,
  },
  {
    title: "Website Design",
    icon: mobile,
  },
  {
    title: "Website Development",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: backend,
  },
  {
    title: "Search Engine Optimization",
    icon: creator,
  },
  
  {
    title: "Content Writting",
    icon: web,
  },
 
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];



const experiences = [
  {
    title: "Visual storytelling on the Web:",
    company_name: "Design",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Integrating Graphics and Content Effectively.",
      
    ],
  },
  {
    title: "Infographics:",
    company_name: "Design",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Transforming Complex Data to Engaging Visual Stories.",
     
    ],
  },
  {
    title: "Web Development and Security :",
    company_name: "Cybersecurity",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Protecting Your Site from Cyber Threats.",
      
    ],
  },
  {
    title: "Colourful Pixels",
    company_name: "Emotion in Design",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Painting Emotions in Web Design.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "we can put some good reviews over here.",
    name: "Janhvi Kapoor",
    designation: "COO",
    company: "DEF Corp",

    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
    "we can put some good reviews over here.",
    name: "Hritik Roshan",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "we can put some good reviews over here.",
    name: "Tiger Shroff",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Balaji Catering Services",
    description:
      "Web Design.",
    tags: [
      {
        name: "Logo",
        color: "blue-text-gradient",
      },
      {
        name: "Web Design",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://balaji-caterer.in/",
  },
  {
    name: "Satva",
    description:
      "Web Design.",
    tags: [
      {
        name: "Logo",
        color: "blue-text-gradient",
      },
      {
        name: "web Design",
        color: "green-text-gradient",
      },
     
    ],
    image: jobit,
    source_code_link: "https://sattvapanchkarmaayurveda.com/lander",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
