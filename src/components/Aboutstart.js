import React from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'
import { Element } from 'react-scroll';
const Aboutstart = () => {
  return (
    <Element name="section1" className="element">
      
      
    <div className="container-xxl py-5" id="about">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src="img/banner2.png" alt="About"/>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">Sobha One - Perfect Fusion Of Luxury & Golf</h1>
            <p className="mb-4">Introducing exclusive collection of 1 to 4 bedroom apartments and each unit is meticulously crafted facing lush green private golf course along with leisure amenities nestled at the podium level.</p>
            <p><i className="fa fa-check text-primary me-3"></i>Starting From AED 1.4M so book now with 2% only and get 10% guranteed rental returns and high capital appreciation.</p>
            <p><i className="fa fa-check text-primary me-3"></i>Sobha One is located just 8 minutes away from Burj Khalifa & Dubai and offering world-class services.</p>
            <p><i className="fa fa-check text-primary me-3"></i>Each Sobha One apartment beckons is studded with all the amenities that come with luxury living.</p>
            <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
};



export default Aboutstart