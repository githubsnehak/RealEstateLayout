import React from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'

const Connect = () => {
  return (
    <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded p-3 shadow-lg">
        <div className="rounded p-4" style={{ backgroundColor: '#303130', border: '1px dashed rgba(0, 185, 142, .3)' }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <img className="img-fluid rounded w-100" src="img/adv.png" alt=""/>
            </div>
            <div className="col-lg-6 text-white wow fadeIn" data-wow-delay="0.5s">
              <div className="mb-4">
                <h1 className="mb-3" style={{ color: "white" }}>Contact With Our Real Estate Advisor</h1>
                <p>Know more about location, amenities, layouts and prices of Sobha One.</p>
              </div><br/>
              <a href="" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</a><br/><br/>
              <a href="" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Get Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Connect;
