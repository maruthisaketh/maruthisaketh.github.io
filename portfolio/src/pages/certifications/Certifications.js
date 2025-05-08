import './Certifications.css';
import certificationsData from '../../content/certificatesContent';

function Certifications() {
    return (
        <div className="certs-container">
            {certificationsData.map((cert, index) => (
                <div className="cert-card" key={index}>
                    <div className="cert-header">
                        <span className="cert-icon">{cert.icon}</span>
                        <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cert-link-icon" viewBox="0 0 24 24">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    </div>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-org">{cert.organization}</p>
                    {cert.date && <p className="cert-date">{cert.date}</p>}
                </div>
            ))}
        </div>
    );
};

export default Certifications;