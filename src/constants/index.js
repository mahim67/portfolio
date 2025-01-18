import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nextjs,
  git,
  meta,
  pondit,
  carrent,
  jobit,
  tripguide,
  php,
  laravel,
  oracle,
  mysql,
  rabbiImage,
  AhosanImage,
  MzrImage,
  tailwindcss,
  aims,
  codegenie,
  ecom
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Tailwind",
    icon: tailwindcss,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Pondit Limited",
    icon: pondit,
    iconBg: "#E6DEDD",
    date: "April 2021 - Present",
    points: [
      "Developing and maintaining web applications using PHP, Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "As a team player, he collaborates effectively and consistently ensures the success of our projects. His technical expertise and dedication make him an invaluable part of the team.",
    name: "Mian Zadid Rusdid",
    designation: "CTA & Lead Trainer",
    company: "PONDIT",
    image: MzrImage
  },
  {
    testimonial: "As a team member, he stands out for his quick delivery and outstanding ability to fulfill user requirements. His expertise and collaborative approach make him a valuable asset to any team.",
    name: "Ahosan Habib",
    designation: "Senior Software Engineer",
    company: "Portonics Limited",
    image: AhosanImage
  },
  {
    testimonial: "I've never met a web developer who truly cares about their client's success like Mahim.",
    name: "Rabbi Ahamed",
    designation: "CTO",
    company: "Isotope IT Ltd",
    image: rabbiImage,
  },
];

const projects = [
  {
    name: "Air Force Inventory Management System (AIMS)",
    description: "",
    detail_description : [
      {
        detail : "Developed the Tender Module for the AIMS (A Government Project for Bangladesh Airforce), streamlining the process of generating complex Comparative Statement Reports (CST) for all Tender Bids by the Suppliers. This innovative solution reduces the workload of two Airmen Personnel by a significant margin, saving a week’s worth of effort to just 15 minutes, with a 100% accuracy rate."
      },
      {
        detail : "Developed the Procurement Module for the AIMS, streamlining the process of maintain optimal inventory levels. The process ensures that resources are available when needed while overstocking or understocking. This typically includes Purchase Planning, Supplier Management, Contracts, Purchase Orders and Authority Approval Process"
      }, 
      {
        detail : "Developed Product & Budget Module, Streamlining the process of maintain Stock management and Real time Product Stock Location"
      }
    ],
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "oracle",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: aims,
    source_code_link: "",
  },
  {
    name: "Codegenie",
    description:
      "Developed an innovative in-house code generation tool, Codegenie, which significantly reduces repetitive coding processes by automatically generating optimized code for every developers in the organisation. The tool also includes various utility functions to optimize and streamline the development process, resulting in increased efficiency and productivity, reducing an hour or two worth of effort to just 5 to 10 minutes with great reliability.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
    ],
    image: codegenie,
    source_code_link: "/",
  },
  {
    name: "Feature BD",
    description:
      "A sleek and user-friendly B2C E-commerce platform specializing in cosmetic products. Features include intuitive navigation, detailed product listings, secure checkout, and seamless user experience to enhance online shopping. Designed to cater directly to customers with a focus on aesthetics and functionality.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "orange-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://www.featurebd.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
