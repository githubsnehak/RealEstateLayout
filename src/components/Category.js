import React from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'
import { Element } from 'react-scroll';
const Category = () => {
  return (
    <Element name="section2" className="element">
      
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Project Amenities</h1>
          <p>Sobha Orbis, a new residential project by Sobha at Motor City, Dubai, stands as a symbol of luxury and comfort with 40 floors high rise towers.</p>
<p>Here you can expect anything ranging from top-notch facilities to a stylish clubhouse with a comfortable and luxury living experience.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/golf1.png" alt="Icon"/>
                </div>
                <h6>Golf Course</h6>
                
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/gate1.png" alt="Icon"/>
                </div>
                <h6>Gated Community</h6>
             
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/lakes1.png" alt="Icon"/>
                </div>
                <h6>Lakes and Parks</h6>
                
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/gym2.PNG" alt="Icon"/>
                </div>
                <h6>Gym</h6>
               
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/club1.png" alt="Icon"/>
                </div>
                <h6>Club House</h6>
               
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/mall2.png" alt="Icon"/>
                </div>
                <h6>Shopping Mall</h6>
              
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/pool1.png" alt="Icon"/>
                </div>
                <h6>Resort Style Pool</h6>
              
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/garden1.png" alt="Icon"/>
                </div>
                <h6>Sky Gardens</h6>
               
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Category;
