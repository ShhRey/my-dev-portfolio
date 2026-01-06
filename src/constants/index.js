import { FaLinkedin, FaGithub, FaDiscord, FaFigma } from 'react-icons/fa';

const navLinks = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#project" },
  { name: "Journey", link: "#experience" },
  { name: "Skills", link: "#skills" }
];

const words = [
  { text: 'Code', imgPath: `images/code.svg` },
  { text: 'Ideas', imgPath: `images/ideas.svg` },
  { text: 'Concepts', imgPath: `images/concepts.svg` },
  { text: 'Designs', imgPath: `images/designs.svg` },
  { text: 'Code', imgPath: `images/code.svg` },
  { text: 'Ideas', imgPath: `images/ideas.svg` },
  { text: 'Concepts', imgPath: `images/concepts.svg` },
  { text: 'Designs', imgPath: `images/designs.svg` }
]

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Tools Mastered" },
  { value: 500, suffix: "+", label: "Users Impacted" },
];

const abilities = [
  {
    imgPath: `images/seo.png`,
    title: "Problem-Solving Mindset",
    desc: "Complex problems are just opportunities in disguise. I architect smart, practical solutions under pressure.",
  },
  {
    imgPath: `images/chat.png`,
    title: "Transparent Collaboration",
    desc: "Clear, consistent communication throughout the development cycle ensures you're always in the loop, no surprises.",
  },
  {
    imgPath: `images/time.png`,
    title: "Delivery Discipline",
    desc: "From startup scrums to solo builds, I've consistently shipped products on schedule without compromising quality or performance.",
  },
];

const expCards = [
  {
    review: `" Shrey brought backend expertise and product-focused thinking to the team, helping redesign platforms, streamline processes, and integrate innovative systems. His contributions were pivotal in driving business efficiency and growth. "`,
    logoPath: `images/compLogo.png`,
    compName: "Earnestroi Technology",
    title: "Software Developer",
    date: "February 2022 - August 2023",
    responsibilities: [
      "Migrated legacy applications to Django and FastAPI, improving API response times, maintainability, and overall system efficiency.",
      "Redesigned and implemented end-to-end backend APIs using Django and led a UI/UX redesign, contributing to a 30% increase in client revenue for a B2C marketing platform.",
      "Developed blockchain-based decentralized applications (DApps) using Solidity and Web3, focusing on smart contract interaction and frontend integration.",
      "Engineered Python-based algorithmic trading libraries with React dashboards, achieving a 25% performance improvement through optimized data processing.",
    ],
  },
  {
    review: `" Shrey quickly ramped up as an intern, contributing to web scraping and automation tools that enhanced internal research processes. His adaptability and proactive mindset made a noticeable impact early on. "`,
    logoPath: `images/compLogo.png`,
    compName: "Earnestroi Technology",
    title: "Backend Engineer Intern",
    date: "November 2021 - January 2022",
    responsibilities: [
      "Automated Telegram-based user engagement workflows using Python and Node.js bots, expanding communication reach.",
      "Created web scraping and data ingestion pipelines using Selenium, Puppeteer and Node.js to support competitive analysis and structured data collection.",
      "Designed interactive data visualization dashboards using charting libraries, enhancing research insights and decision-making.",
    ]
  },
];

const techStackIcons = [
  {
    name: "Web Development",
    modelPath: `models/react_logo.glb`,
    alt: "Web Development",
    scale: 1.3,
    rotation: [0, Math.PI, 0],
  },
  {
    name: "API Engineering",
    modelPath: `models/node_logo.glb`,
    alt: "Backend Development",
    scale: 5.5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Web3 Integration",
    modelPath: `models/ethereum_logo.glb`,
    alt: "Web3 Development",
    scale: 0.008,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control",
    modelPath: `models/git_logo.glb`,
    alt: "Git Version Control",
    scale: 0.06,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Machine Learning",
    modelPath: `models/python_logo.glb`,
    alt: "Machine Learning",
    scale: 1,
    rotation: [0, 0, 0],
  },
];

const socialIcons = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/shreytrivedi577',
    hoverColor: 'hover:text-blue-500'
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: 'https://www.github.com/ShhRey',
    hoverColor: 'hover:text-gray-600'
  },
  {
    name: "Discord",
    icon: FaDiscord,
    url: 'https://discordapp.com/users/1149518475904159755',
    hoverColor: 'hover:text-indigo-400'
  },
  {
    name: "Figma",
    icon: FaFigma,
    url: 'https://www.figma.com/@shreytrivedi1',
    hoverColor: 'hover:text-pink-400'
  },
];

export {
  navLinks,
  words,
  counterItems,
  abilities,
  expCards,
  techStackIcons,
  socialIcons
}