import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ sidebar, setSidebar }) => {
   const showNavbar = () => {
      setSidebar(!sidebar);
   };
   return (
      <>
         <div className="navbar">
            <Link to="#" onClick={showNavbar} className="menu-bars">
               <FaBars />
            </Link>
         </div>
         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
               <li className="navbar-toggle" onClick={showNavbar}>
                  <FaTimes />
               </li>
               <li className="nav-text">
                  <Link to="./" onClick={showNavbar}>
                     Top Stories
                  </Link>
               </li>
               <li className="nav-text">
                  <Link to="./newStories" onClick={showNavbar}>
                     New Stories
                  </Link>
               </li>
               <li className="nav-text">
                  <Link to="./jobs" onClick={showNavbar}>
                     Jobs
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navbar;
