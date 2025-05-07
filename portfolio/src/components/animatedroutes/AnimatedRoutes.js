import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Work from '../../pages/work/Work';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                
                {/* <Route path="/education" element={<Education />} />
                
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;