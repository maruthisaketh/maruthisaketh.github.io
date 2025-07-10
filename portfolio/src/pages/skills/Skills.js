import './Skills.css';
import skillsData from '../../content/skillsContent';

function Skills() {
    return (
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, items], index) => (
          <div key={index} className="skills-section">
            <h2 className="skills-heading">{category}</h2>
            <div className="skills-grid">
              {items.map((skill, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;