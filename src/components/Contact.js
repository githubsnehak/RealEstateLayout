import React from 'react';
import '../css/bootstrap.min.css'
import '../css/style.css'
import { Element } from 'react-scroll';
const Contact = () => {
  return (
    <Element name="section3" className="element">
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Contact Us</h1>
          <p>Request a consultation with expert advisors.</p>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                      <i className="fa fa-map-marker-alt text-primary"></i>
                    </div>
                    <span>Motor City, Dubai</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                      <i className="fa fa-envelope-open text-primary"></i>
                    </div>
                    <span>SobhaRealEstate@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                      <i className="fa fa-phone-alt text-primary"></i>
                    </div>
                    <span>971521718769</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <iframe className="position-relative rounded w-100 h-100"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14497.308079988698!2d55.22902182274165!3d25.04986783965369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6e0d07d2c5d3%3A0xe15f77db0df3f66b!2sMotor%20City%2C%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
    frameBorder="0" style={{ minHeight: '400px', border: '0' }} allowFullScreen="" aria-hidden="false"
    tabIndex="0"></iframe>
</div>


          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4">Book a Virtual Tour by Filling the Form Below</p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="number" placeholder="Phone Number"/>
                      <label htmlFor="number">Phone Number</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Enquire Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
}

export default Contact;

