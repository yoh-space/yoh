// Project data, skills, and other content for the portfolio
import { 
  FaReact, FaNodeJs, FaSass, FaFigma, 
  FaGithub, FaLinkedin, FaTwitter, FaMobile, 
  FaGlobe, FaMicrochip, FaTools, FaDesktop, FaShieldAlt,
  FaTelegram
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiArduino,
  SiWordpress, SiAndroidstudio, SiPython
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

/**
 * Social media links for the portfolio
 * @type {Array<{name: string, url: string, icon: React.ComponentType}>}
 */
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yoh-space", // Updated with actual GitHub URL
    icon: FaGithub
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yohannes-damtie-27b7882b2/", // Updated with LinkedIn URL
    icon: FaLinkedin
  },
  {
    name: "Twitter", 
    url: "https://x.com/fxyoni", // Updated with Twitter URL
    icon: FaTwitter
  },
  {
    name: "Telegram", 
    url: "https://t.me/yon_fx", // Updated with Twitter URL
    icon: FaTelegram
  }
];

/**
 * Navigation links for the website
 * @type {Array<{name: string, path: string}>}
 */
export const navigationLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects-container" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" }
];

/**
 * Skills data organized by category
 * @type {Array<{category: string, skills: Array<{name: string, icon: React.ComponentType, level: number}>}>}
 */
export const skillsData = [
  {
    category: "Mobile Development",
    skills: [
      { name: "React Native", icon: FaReact, level: 90 },
      { name: "Java (Android)", icon: SiJavascript, level: 70 },
      { name: "Expo Go", icon: FaReact, level: 85 },
      { name: "Python Bot", icon: SiPython, level: 75 }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "WordPress", icon: SiWordpress, level: 70 },
      { name: "JavaScript", icon: SiJavascript, level: 80 },
      { name: "React Basics", icon: FaReact, level: 65 },
      { name: "HTML/CSS", icon: FaSass, level: 85 },
    ]
  },
  {
    category: "Electronics",
    skills: [
      { name: "Arduino", icon: SiArduino, level: 85 },
      { name: "Proteus", icon: FaMicrochip, level: 75 },
      { name: "Circuit Design", icon: FaMicrochip, level: 85 },
      { name: "Mini-Sensor Integration", icon: FaMicrochip, level: 70 },
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { name: "VS Code", icon: TbBrandVscode, level: 90 },
      { name: "Git/GitHub", icon: FaGithub, level: 80 },
      { name: "Android Studio", icon: SiAndroidstudio, level: 75 },
      { name: "VirtualBox", icon: FaDesktop, level: 85 },
    ]
  },
  {
    category: "OS Expertise",
    skills: [
      { name: "Windows", icon: FaDesktop, level: 95 },
      { name: "Kali Linux", icon: FaDesktop, level: 70 },
      { name: "Ubuntu", icon: FaDesktop, level: 75 },
      { name: "Backtrack", icon: FaDesktop, level: 60 },
    ]
  }
];

/**
 * Projects data for the portfolio
 * @type {Array<{id: number, title: string, description: string, image: string, tags: Array<string>, demoUrl: string, githubUrl: string}>}
 */
export const projectsData = [
  {
    id: 1,
    title: "Freshman Module Plus",
    description: "Comprehensive educational app featuring AI-powered Q&A, PDF resources, NotePad and GPA Calculator and Goal Setting",
    image: "/FreshmanModuleAppImage/photo_8_2025-04-09_20-17-15.jpg",
    tags: ["React Native", "AI Integration", "Firebase"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.freshmanmoduleplus",
    githubUrl: "https://github.com/yohansforex"
  },
  {
    id: 2,
    title: "Line Follower Robot",
    description: "Autonomous robot with advanced path-following capabilities using infrared sensors and customizable control algorithms.",
    image: "/FreshmanModuleAppImage/photo_7_2025-04-09_20-17-15.jpg",
    tags: ["Arduino", "Circuit Design", "Mechanical"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "BDU Freshman Assistant Bot",
    description: "Telegram bot providing instant access to academic resources, AI-powered answers, and automated quiz generation for students.",
    image: "/FreshmanBotImage/frew1bot.jpg",
    tags: ["Python", "Telegram API", "Cloud Functions"],
    demoUrl: "https://t.me/bdu_freshman_bot",
    githubUrl: "https://github.com/yohansforex"
  },
  {
    id: 4,
    title: "Hike Engineering Company Profile",
    description: "Client: Hike Engineering Solution PLC. A professional website showcasing the company's services, projects, and contact information.",
    image: "/HikeEngineering/1.png",
    tags: ["CSS", "JavaScript", "React"],
    demoUrl: "https://hike-engineering.vercel.app",
    githubUrl: "https://github.com/yohansforex"
  },
  {
    id: 5,
    title: "Personal Profile Website",
    description: "Client: Biomedical Engineer, Youtuber Ermias Mulusew (@Escape_out) A personal website showcasing skills, projects, and contact information.",
    image: "/ErmiasMulusew/1.png",
    tags: ["CSS", "JavaScript", "React"],
    demoUrl: "https://ermias-mulusew.vercel.app",
    githubUrl: "https://github.com/yohansforex"
  },
  {
    id: 6,
    title: "Historical Book App",
    description: "Client: Author of Handhuuraa Oromoo Arsii Ibro Walliiyii (A.G) Minosota USA",
    image: "/FreshmanModuleAppImage/photo_5_2025-04-09_20-17-15.jpg",
    tags: ["CSS", "JavaScript", "React"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.custompdfreader",
    githubUrl: "https://github.com/yohansforex"
  }
];

/**
 * About section data
 * @type {{title: string, description: Array<string>, profileImageUrl: string}}
 */
export const aboutData = {
  title: "About Me",
  description: [
    "I'm Yohannes Damtie, a passionate Cross Platform Mobile Developer specializing in React Native applications. My journey began with creating the Freshman Module Plus app for university students.",
    "I combine mobile development with web technologies, Linux systems, and robotics circuit design, backed by intermediate cybersecurity knowledge.",
    "I'm currently computting my bachelor's degree in the field of Software Engineering at Bahir Dar University, Bahir Dar, Ethiopia, where I work on creating innovative mobile and web solutions for clients.",
    "My capabilities include Mobile Development (React Native, Java), Web Development (WordPress, JavaScript), Electronics & Robotics (Circuit Design, Arduino), and Security & Systems (Cybersecurity Basics, Kali Linux)."
  ],
  profileImageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder image
};

/**
 * Contact section data
 * @type {{title: string, description: string, email: string, phone: string}}
 */
export const contactData = {
  title: "Get In Touch",
  description: "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!",
  email: "yohansdam@gmail.com", // Updated with actual email
  phone: "+251 911 701 858" // Updated with actual phone number
}; 