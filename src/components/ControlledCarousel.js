import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img src={process.env.PUBLIC_URL + '/img/banner1.png'} className="d-block w-100" alt="First slide" />       
      </Carousel.Item>
      
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + '/img/banner3.png'} className="d-block w-100" alt="Third slide" />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
