import './Contact.css';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import contactDetails from '../../content/contactContent';

const Contact = () => {
    return (
        <>
            <div className='App-section-header'>
                <h1>Contact Details</h1>
                <hr></hr>
            </div>

            <section className="contact-section">
                <div className="contact-card">
                    <img src={contactDetails.profileImage} alt="Profile" className="contact-profile-pic" />
                    <div className="contact-info">
                        <h2 className="contact-name">{contactDetails.name}</h2>
                        <p className="contact-title">{contactDetails.title}</p>
                        <p className="contact-summary">{contactDetails.summary}</p>
                        <p className="contact-meta">{contactDetails.organization}</p>

                        <a
                            href={contactDetails.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linked-btn"
                        >
                            <FaLinkedin /> View Profile
                        </a>
                    </div>
                </div>

                <p className="contact-intro">I'm always up for a chat or a coffee! Feel free to reach out.</p>

                <div className="contact-buttons">
                    <div className="contact-button email">
                        <FaEnvelope />
                        <span>{contactDetails.email}</span>
                    </div>
                    <div className="contact-button phone">
                        <FaPhone />
                        <span>{contactDetails.phone}</span>
                    </div>
                </div>

                <p className="contact-footer">Or catch up over a coffee ☕ <span className="coffee-icon">🟧</span></p>
            </section>
        </>
    );
};

export default Contact;
