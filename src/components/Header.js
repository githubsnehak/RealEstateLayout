import React from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ControlledCarousel from './ControlledCarousel';
import { Element } from 'react-scroll';
const Header = () => {
  return (
    <Element name="section5" className="element">
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <br/><br/><br/><br/>
          <h1 className="display-5 animated fadeIn mb-4"><span className="text-primary">Sobha One</span> Dubai’s<br/> Hottest New Launch!</h1>
          <p className="animated fadeIn mb-4 pb-2">A Sophisticated Tapestry Across The Skyline Located Just 8 Minutes Away From Burj Khalifa At Meydan In MBR City</p>
          <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Make an Enquiry</a>
        </div>
        <div className="col-md-6 animated fadeIn">
          <ControlledCarousel /> {/* Replace Bootstrap Carousel with ControlledCarousel component */}
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Header;
