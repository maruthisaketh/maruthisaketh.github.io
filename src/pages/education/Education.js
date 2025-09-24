import './Education.css';
import educationData from '../../content/educationContent';

const Education = () => {
  return (
    <>
    {/* <div className='App-section-header'>
      <h1>Education</h1>
      <hr></hr>
    </div> */}
    <div className="timeline-container">
      <div className="timeline">
        {educationData.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              className={`timeline-item ${isLeft ? 'left' : 'right'}`}
              key={edu.title}
            >
              <div className="content-card">
                <h3>{edu.title}</h3>
                <p>{edu.institution}</p>
                <ul>
                  {edu.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="circle">
                <img src={edu.logo} alt={`${edu.title} logo`} />
              </div>
              <span className="date">{edu.period}</span>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Education;