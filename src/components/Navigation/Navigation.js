import { Link } from 'react-router-dom';
import './Navigation.css';
import Hamburger from '../../assets/icons8-hamburger-menu.gif';


const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav_ul">
        <li className="nav_li">
          <Link to="/" className="nav_link-home">Home</Link>
        </li>
        <li className="nav_li">
          <Link to="/services" className="nav_link">Services</Link>
        </li>
        <li className="nav_li">
          <Link to="/case" className="nav_link"> Case</Link>
        </li>
        <li className="nav_li">
          <Link to="/dacode" className="nav_link">
            DaCode Specialists
          </Link>
        </li>
        <li className="nav_li">
          <Link to="/blog" className="nav_link">
            Blog
          </Link>
        </li>
        <button class="header_btn">Request a quote</button>
      </ul>
        <img className="hamburg" src={Hamburger} alt=""/> 
    </nav>
  );
};
export default Navigation;