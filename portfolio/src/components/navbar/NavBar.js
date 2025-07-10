import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
            <nav className="navbar">
                <div className="navbar-left">
                    <img src="/favicon.png" alt="logo" className="logo" />
                    <span className="name">&lt;Maruthi Saketh Abbaraju&gt;</span>
                </div>
                <div className="navbar-right">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/education">Education</Link>
                    <Link className="nav-link" to="/work">Work</Link>
                    <Link className="nav-link" to="/certifications">Certifications</Link>
                    <Link className="nav-link" to="/skills">Skills</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </div>
            </nav>
    );
}

export default NavBar;
