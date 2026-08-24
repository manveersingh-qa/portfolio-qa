// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import Sensationlogo from "./assets/company_logo/sensation-software-solutions-pvt-ltd.jpg";


// Education Section Logo's
import mgcLogo from "./assets/education_logo/MGC.jpeg";
import dlisLogo from "./assets/education_logo/DLIS.png";
import stmaryLogo from "./assets/education_logo/stmary.png";

// Project Section Logo's
import lmsLogo from "./assets/work_logo/lms.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Sensationlogo,
    role: "Full Stack Developer Training",
    company: "Sensation Pvt Ltd., Mohali",
    date: "January 2025 - Present (6 Months)",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
];

export const education = [

  {
    id: 0,
    img: mgcLogo,
    school: "Mata Gujri College, Fatehgarh Sahib",
    date: "2022 - 2025",
    grade: "70%",
    desc: "I completed my Bachelor's degree in Computer Science {B.Voc.(SD)} from Mata Gujri College, Fatehgarh Sahib. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Vocational - B.Voc.(SD)-Software Development",
  },
  {
    id: 1,
    img: dlisLogo,
    school: "Divine Light International School, Sirhind",
    date: "2020 - 2022",
    grade: "83%",
    desc: "I completed my class 12 education from Divine Light International School, Sirhind under the CBSE board, where I studied in Commerce",
    degree: "CBSE(XII) ",
  },
  {
    id: 2,
    img: stmaryLogo,
    school: "St. Mary's school,Mahadian, Fatehgarh Sahib ",
    date: "2020",
    grade: "73.8%",
    desc: "I completed my class 10 education from St. Mary's school,Mahadian, Fatehgarh Sahib, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Learning Management System-(LMS)",
    description:
      "A full-stack Learning Management System built with the MERN stack (MongoDB, Express.js, React, Node.js). The platform enables educators to manage courses and students to browse, enroll in, and track their learning progress.",
    image: lmsLogo,
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Vercel", "JWT"],
    github:
      "https://github.com/Manveer90/LMS",
    webapp: "https://lms-frontend-five-delta.vercel.app/",
  }
];
