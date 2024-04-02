import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li><Link to="/aboutMe">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <p>&copy; 2024 Team 1 Project 3</p>
        </footer>
    )
};

export default Footer;