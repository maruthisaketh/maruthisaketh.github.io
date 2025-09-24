// Work.js
import { motion } from "framer-motion";
import workData from "../../content/workContent";
import './Work.css'

const WorkExperience = ({ dates, title, company, description, tags }) => (
  <div className="work-entry">
    <p className="work-dates">{dates}</p>
    <h3 className="work-title">
      {title} · <span className="work-company">{company}</span>
    </h3>
    <p className="work-description">{description}</p>
    <div className="work-tags">
      {tags.map((tag, i) => (
        <span key={i} className="work-tag">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className='App-section-header'>
        <h1>Work Experience</h1>
        <hr></hr>
      </div>
      <section className="work-section">
        {workData.map((job, index) => (
          <WorkExperience key={index} {...job} />
        ))}
      </section>
    </motion.div>
  );
}

export default Work;
