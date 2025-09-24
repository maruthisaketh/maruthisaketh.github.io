import {
  FaPython, FaAws, FaDocker, FaGithub, FaHtml5, FaCss3Alt,
  FaReact, FaAndroid
} from "react-icons/fa";

import {
  SiFastapi, SiFlask, SiJavascript, SiBootstrap, SiAngular,
  SiFirebase, SiKeras, SiNumpy, SiMysql, SiCplusplus, SiVulkan,
  SiQiskit, SiDrupal, SiWordpress, SiTensorflow, SiKotlin
} from "react-icons/si";


const skillsData = {
  Frontend: [
    { icon: <FaHtml5 />, title: "HTML5", desc: "Markup Language" },
    { icon: <FaCss3Alt />, title: "CSS3", desc: "Styling Language" },
    { icon: <SiJavascript />, title: "JavaScript", desc: "Frontend Language" },
    { icon: <SiBootstrap />, title: "Bootstrap", desc: "UI Framework" },
    { icon: <FaReact />, title: "React", desc: "JS Library for UI" },
    { icon: <SiAngular />, title: "Angular", desc: "Frontend Framework" }
  ],

  "Machine Learning": [
    { icon: <SiKeras />, title: "Keras", desc: "Neural Network Library" },
    { icon: <SiNumpy />, title: "NumPy", desc: "Numerical Computing" },
    { icon: <SiTensorflow />, title: "CNN/LSTM", desc: "Deep Learning Models" },
    { icon: <FaPython />, title: "LLMs", desc: "Large Language Models" }
  ],

  Backend: [
    { icon: <FaPython />, title: "Python", desc: "Programming Language" },
    { icon: <SiFastapi />, title: "FastAPI", desc: "High-performance API framework" },
    { icon: <SiFlask />, title: "Flask", desc: "Lightweight web framework" }
  ],

  "Cloud & DevOps": [
    { icon: <FaAws />, title: "AWS", desc: "Cloud Computing Platform" },
    { icon: <FaDocker />, title: "Docker", desc: "Containerization Platform" },
    { icon: <FaGithub />, title: "GitHub Actions", desc: "CI/CD Automation Tool" }
  ],

  Mobile: [
    { icon: <FaAndroid />, title: "Android", desc: "Mobile OS" },
    { icon: <SiFirebase />, title: "Firebase", desc: "Mobile Backend Platform" },
    { icon: <SiKotlin />, title: "Kotlin", desc: "Mobile App Language" },
  ],

  "Tools & Frameworks": [
    { icon: <SiMysql />, title: "MySQL", desc: "Relational Database" },
    { icon: <FaPython />, title: "Multithreading", desc: "Concurrent Programming" },
    { icon: <FaPython />, title: "Regex", desc: "Pattern Matching" },
    { icon: <SiCplusplus />, title: "CUDA", desc: "GPU Computing with C++" },
    { icon: <SiVulkan />, title: "Vulkan", desc: "Graphics API" },
    { icon: <SiQiskit />, title: "Qiskit", desc: "Quantum Computing Framework" },
    { icon: <SiDrupal />, title: "Drupal", desc: "CMS Platform" },
    { icon: <SiWordpress />, title: "WordPress", desc: "Website CMS" }
  ]
  };

  export default skillsData;