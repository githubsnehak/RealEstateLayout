import React from 'react';
import '../css/style.css';
import '../css/bootstrap.min.css';
import { Link as ScrollLink, Element } from 'react-scroll';

const Footer = () => {
  return (
    <div className="container-fluid  text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: '#303130' }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Motor City, Dubai</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>971521718769</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>SobhaRealEstate@gmail.com</p>
           
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
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
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Photo Gallery</h5>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="img/banner1.png" alt=""/>
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="img/banner2.png" alt=""/>
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="img/banner3.PNG" alt=""/>
              </div>
             
              
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Search</h5>
           
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Search"/>
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Copyright Milestone Homes Real Estate</a>   | All Right Reserved. 
              
            </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
