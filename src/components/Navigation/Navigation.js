import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import { FaTimes } from "react-icons/fa";
import cx from "classnames";
import { useState } from "react";
import navbar from '../../assets/Hamburger-menu.png';



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showSideBar = () => setIsOpen(!isOpen);

  return (
    <header className={classes.header}>
        <div className={isOpen ? classes.allNav : classes.allNav2}>
        {isOpen && (
          <div
            className={cx(classes.bar, classes.hideBar)}
            onClick={showSideBar}
          >
            <FaTimes />
          </div>
        )}    
                    <nav className={classes.nav}>
                      <ul className={classes.nav_ul}>
                        <li className={classes.nav_li}>
                          <Link to="/" className={classes.nav_link}>Home</Link>
                        </li>
                        <li className={classes.nav_li}>
                          <Link to="/services" className={classes.nav_link}>Services</Link>
                        </li>
                        <li className={classes.nav_li}>
                          <Link to="/case" className={classes.nav_link}> Case</Link>
                        </li>
                        <li className={classes.nav_li}>
                          <Link to="/dacode" className={classes.nav_link}>
                            DaCode Specialists
                          </Link>
                        </li>
                        <li className={classes.nav_li}>
                          <Link to="/blog" className={classes.nav_link}>
                            Blog
                          </Link>
                        </li>
                      </ul>
                        <button className={classes.header_btn}>Request a quote</button>
                    </nav>
            </div>
                    <button className={classes.bar} onClick={showSideBar}>
                      <img src={navbar} alt="navbar" />
                  </button>
            </header>
  );
};
export default Navigation;