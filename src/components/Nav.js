import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


export const Nav = () => {

    return (
        <>
        <img src={logo} alt="logo" style={{height: 100, width: 500}} />
              <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/reserve" className="nav-item">Reserve</Link></li>
                <li><Link to="/menu" className="nav-item">Menu</Link></li>
              </ul>
        </>
    )
}

