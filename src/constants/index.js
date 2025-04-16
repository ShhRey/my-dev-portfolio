const navLinks = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#project" },
  { name: "Journey", link: "#experience" },
  { name: "Skills", link: "#skills" }
];

const words = [
  { text: 'Code', imgPath: 'images/code.svg' },
  { text: 'Ideas', imgPath: 'images/ideas.svg' },
  { text: 'Concepts', imgPath: 'images/concepts.svg' },
  { text: 'Designs', imgPath: 'images/designs.svg' },
  { text: 'Code', imgPath: 'images/code.svg' },
  { text: 'Ideas', imgPath: 'images/ideas.svg' },
  { text: 'Concepts', imgPath: 'images/concepts.svg' },
  { text: 'Designs', imgPath: 'images/designs.svg' }
]

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Tools Mastered" },
  { value: 500, suffix: "+", label: "Users Impacted" },
];

const abilities = [
  {
    imgPath: "images/seo.png",
    title: "Problem-Solving Mindset",
    desc: "Complex problems are just opportunities in disguise. I architect smart, practical solutions under pressure.",
  },
  {
    imgPath: "images/chat.png",
    title: "Transparent Collaboration",
    desc: "Clear, consistent communication throughout the development cycle ensures you're always in the loop, no surprises.",
  },
  {
    imgPath: "images/time.png",
    title: "Delivery Discipline",
    desc: "From startup scrums to solo builds, I've consistently shipped products on schedule without compromising quality or performance.",
  },
];

const expCards = [
  {
    review: `" Shrey brought backend expertise and product-focused thinking to the team, helping redesign platforms, streamline processes, and integrate innovative systems. His contributions were pivotal in driving business efficiency and growth. "`,
    logoPath: "/images/compLogo.png",
    compName: "Earnestroi Technology",
    title: "Backend Developer",
    date: "February 2022 - August 2023",
    responsibilities: [
      "Migrated legacy applications to Django and FastAPI, increasing system efficiency by 15%.",
      "Redesigned the UI/UX and built complete backend APIs in Django for a MLM Platform, leading to a 40% boost in client revenue.",
      "Developed decentralized apps (DApps) using Web3 and Solidity to support blockchain-powered features.",
      "Engineered custom algorithmic trading libraries in Python with React frontends, improving performance by 25%.",
    ],
  },
  {
    review: `" Shrey quickly ramped up as an intern, contributing to web scraping and automation tools that enhanced internal research processes. His adaptability and proactive mindset made a noticeable impact early on. "`,
    imgPath: "/images/exp1.png",
    logoPath: "/images/compLogo.png",
    compName: "Earnestroi Technology",
    title: "Backend Engineer Intern",
    date: "November 2021 - January 2022",
    responsibilities: [
      "Automated Telegram-based user engagement using Python/NodeJS bots, improving communication reach by 10%.",
      "Formulated web scraping tools using Selenium and Node.js for competitive analysis and data collection.",
      "Utilized charting libraries to develop visual data dashboards, improving research insights by 35%.",
    ]
  },
];

export {
  navLinks,
  words,
  counterItems,
  abilities,
  expCards
}