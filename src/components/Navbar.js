import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
   const [sidebar, setSidebar] = useState(false);

   const showNavbar = () => {
      setSidebar(!sidebar);
   };
   return (
      <>
         <div className="Navbar">
            <div className="Logo">SlackerNews</div>

            <nav className="Links">
               <Link to="./">Top Stories</Link>
               <Link to="./newStories">New Stories</Link>
               <Link to="./jobs">Jobs</Link>
            </nav>
            <div className="menu-bars" onClick={showNavbar}>
               <FaBars />
            </div>
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
