import { FaNodeJs, FaDocker, FaJava, FaPhp } from 'react-icons/fa';
import { SiRubyonrails, SiSpringboot, SiKubernetes, SiHeroku, SiNetlify, SiGooglecloud } from 'react-icons/si';


const skillsData = {
    Backend: [
      { icon: <SiRubyonrails />, title: "RubyonRails", desc: "Backend Framework" },
      { icon: <FaPhp />, title: "PHP", desc: "Backend Language" },
      { icon: <FaJava />, title: "Java", desc: "Object-Oriented Programming Language" },
      { icon: <SiSpringboot />, title: "SpringBoot", desc: "Java Framework" },
      { icon: <FaNodeJs />, title: "Node.js", desc: "Backend Runtime" }
    ],
    "Cloud & DevOps": [
      { icon: <SiNetlify />, title: "Netlify", desc: "Frontend Deployment Platform" },
      { icon: <SiHeroku />, title: "Heroku", desc: "Cloud Platform for Apps" },
      { icon: <SiKubernetes />, title: "Kubernetes", desc: "Container Orchestration" },
      { icon: <FaDocker />, title: "Docker", desc: "Containerization" },
      { icon: <SiGooglecloud />, title: "GCP", desc: "Google Cloud Platform" }
    ]
  };

  export default skillsData;