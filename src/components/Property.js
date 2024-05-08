import React from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Element } from 'react-scroll';
const Property = () => {
  return (
    <Element name="section4" className="element">
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 class="mb-3">Payment Plan</h1>
                        <h5>Starting From AED 1.4M</h5>
                        <p>Book With 2% & Get a Free Travel Package to Dubai for 2 People</p>
                    </div>
                </div>
               
            </div>
            <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{margin:"auto"}}>
                            <div class="property-item rounded overflow-hidden">
                                <div class="position-relative overflow-hidden">
                                    <a href=""><img class="img-fluid" src="img/pay1.png" alt=""/></a>
                                    
                                    </div>
                                <div class="p-4 pb-0">
                                    
                                    <a class="d-block h5 mb-2" href="">10%</a>
                                    <p class="text-primary mb-3">Downpayment At Booking</p>
                                    <button className="btn btn-primary" style={{ marginBottom: "10px" }}>Book Now</button>

                                </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{margin:"auto"}}>
                            <div class="property-item rounded overflow-hidden">
                                <div class="position-relative overflow-hidden">
                                    <a href=""><img class="img-fluid" src="img/pay2.png" alt=""/></a>
                                    </div>
                                <div class="p-4 pb-0">
                                    
                                    <a class="d-block h5 mb-2" href="">60%</a>
                                    <p class="text-primary mb-3">During Construction</p>
                                    <button className="btn btn-primary" style={{ marginBottom: "10px" }}>Book Now</button>

                                </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{margin:"auto"}}>
                            <div class="property-item rounded overflow-hidden">
                                <div class="position-relative overflow-hidden">
                                    <a href=""><img class="img-fluid" src="img/pay3.png" alt=""/></a>
                                    </div>
                                <div class="p-4 pb-0">
                                    
                                    <a class="d-block h5 mb-2" href="">40%</a>
                                    <p class="text-primary mb-3">On Handover in Q4 2026</p>
                                    <button className="btn btn-primary" style={{ marginBottom: "10px" }}>Book Now</button>

                                </div>
                                
                            </div>
                        </div>
                        
                       </div>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </Element>
    
  )
}

export default Property