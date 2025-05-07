import { motion } from 'framer-motion';
import "./About.css";
import aboutData from '../../content/aboutContent';

function About() {
    const { intro, title, paragraphs, links, image } = aboutData;

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="about-content">
                <div className="about-left">
                    <div className="about-image-wrapper">
                        <img src={image} alt="profile" className="about-image" />
                    </div>
                    <div className="about-buttons">
                        <a href={links.resume} className="btn resume-btn" target="_blank" rel="noopener noreferrer">Resume</a>
                        <a href={links.linkedin} className="btn linkedin-btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={links.github} className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

                <div className="about-right">
                    <p className="about-intro">{intro}</p>
                    <h1 className="about-title">{title}</h1>
                    <div className="about-text">
                        {paragraphs.map((item, index) => (
                            <p key={index}><span className="emoji">{item.icon}</span> {item.text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default About;
