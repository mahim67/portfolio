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
  MzrImage
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
