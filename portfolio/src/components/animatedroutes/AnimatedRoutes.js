import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Work from '../../pages/work/Work';
import Projects from '../../pages/projects/Projects';
import Skills from '../../pages/skills/Skills';
import Certifications from '../../pages/certifications/Certifications';
import Education from '../../pages/education/Education';
import Contact from '../../pages/contact/Contact';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;