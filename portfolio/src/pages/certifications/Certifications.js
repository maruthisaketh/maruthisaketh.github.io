import './Certifications.css';
import certificationsData from '../../content/certificatesContent';

function Certifications() {
    return (
        <div className="certs-container">
            {certificationsData.map((cert, index) => (
                <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-card-link"
                key={index}
              >
                <div className="cert-card">
                  <div className="cert-header">
                    <img className="cert-icon" src={cert.icon} alt={cert.alt}></img>
                    <svg xmlns="http://www.w3.org/2000/svg" className="cert-link-icon" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-org">{cert.organization}</p>
                  {cert.date && <p className="cert-date">{cert.date}</p>}
                </div>
              </a>
              
            ))}
        </div>
    );
};

export default Certifications;