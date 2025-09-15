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
  fastapi,
  DewanLogo,
  AdityaBirlaLogo,
  MaybankLogo,
  IrelandRentPredictor,
  Amazon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FastAPI",
    icon: fastapi,
  },
  {
    title: "ReactJS",
    icon: reactjs,
  },
  {
    title: "Django",
    icon: backend,
  },
  {
    title: "SpringBoot",
    icon: creator,
  },
  {
    title: "HTML",
    icon: creator,
  },
  {
    title: "CSS",
    icon: creator,
  },
  {
    title: "SQL",
    icon: creator,
  },
  {
    title: "Docker",
    icon: creator,
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
    title: "Full Stack Developer",
    company_name: "Dewan Architects & Engineers",
    icon: DewanLogo,
    iconBg: "#383E56",
    date: "Sep 2023 - Jul 2025",
    points: [
      "Solely developed Dewan Software Manager (DSM), a company-wide solution for installing pre-approved software with admin privileges.",
      "Built the web application version using React (Frontend) and FastAPI (Backend).",
      "Later extended DSM to a desktop application using Windows Forms App (.NET Framework) for enhanced accessibility.",
    ],
  },
  {
    title: "Associate Product Engineer",
    company_name: "Aditya Birla Group",
    icon: AdityaBirlaLogo,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - June 2023",
    points: [
      "Worked as a Full Stack Developer and Data Engineer.",
      "Developed web applications using Django and FastAPI, ensuring scalable and maintainable solutions.",
      "Built ETL pipelines in Python to extract and process data from Aspen servers, enabling real-time insights.",
    ],
  },
  {
    title: "Product Engineer",
    company_name: "MBB Labs Private Ltd (Maybank)",
    icon: MaybankLogo,
    iconBg: "#383E56",
    date: "June 2021 - Dec 2022",
    points: [
      "Worked primarily as a Full Stack developer in PESTOS team on the Loan Disbursement Project.",
      "Developed backend services using Spring MVC and Spring Boot, and built interactive frontends with React.",
      "Coordinated with the ELDS system in Malaysia, ensuring seamless integration and smooth project delivery.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ireland Rent Predictor",
    description:
      "Developed an Ireland Rent Predictor web app using React, FastAPI, and a Random Forest model on daft.ie data, featuring a Rasa chatbot for conversational queries and Dockerized for deployment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "purple-text-gradient",
      },
      {
        name: "randomforest",
        color: "orange-text-gradient",
      },
    ],
    image: IrelandRentPredictor,
    source_code_link: "https://github.com/nikhilPai28091999/Rent-Predictor",
  },
  {
    name: "Amazon UI Clone",
    description:
      "Built an Amazon-like UI with JavaScript, HTML, and CSS, featuring a dynamic shopping cart with add/remove functionality, while gaining hands-on experience in frontend development, DOM manipulation, and state management.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: Amazon,
    source_code_link: "https://github.com/nikhilPai28091999/Amazon",
  },
  // {
  //   name: "GDNA Project",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
