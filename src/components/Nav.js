import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


export const Nav = () => {

    return (
        <nav>
        <img src={logo} alt="logo" style={{height: 70, width: 300}} />
              <ul>
                <li><Link to="/" className="nav-links">Home</Link></li>
                <li><Link to="/reserve" className="nav-links">Reserve</Link></li>
                <li><a href="#specials" className="nav-links">Specials</a></li>
              </ul>
        </nav>
    )
}

