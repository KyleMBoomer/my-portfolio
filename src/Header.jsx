import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">About Me</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    {/* <li>
                        <Link to="/resume">Resume</Link>
                    </li> */}
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header 