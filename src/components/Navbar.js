import React from 'react'
import '../css/bootstrap.min.css'
import '../css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'
import { Link as ScrollLink, Element } from 'react-scroll';


const Navbar = () => {
  return (
    <div className="container-fluid nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
          
          <h1 className="m-0 text-primary">SOBHA</h1>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
          <ScrollLink to="section5" smooth={true} duration={500} className="nav-item nav-link" style={{ cursor: 'pointer'}} >
            Home
          </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500} className="nav-item nav-link" style={{ cursor: 'pointer'}} >
            About
          </ScrollLink>
          <ScrollLink to="section4" smooth={true} duration={500} className="nav-item nav-link" style={{ cursor: 'pointer'}} >
            Payment Plan
          </ScrollLink>
          <ScrollLink to="section2" smooth={true} duration={500} className="nav-item nav-link" style={{ cursor: 'pointer'}} >
            Amenities
          </ScrollLink>
         <ScrollLink to="section3" smooth={true} duration={500} className="nav-item nav-link" style={{ cursor: 'pointer'}} >
            Contact Us
          </ScrollLink>
          
           </div>
         </div>
      </nav><br/>
    </div>
  );
};

export default Navbar;


