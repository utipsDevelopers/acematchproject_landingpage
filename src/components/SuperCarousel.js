import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import News1 from '../img/news1.png'; 
import News2 from '../img/news2.png'; 
import News3 from '../img/news3.png'; 

const SuperCarousel = () => (
  <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
    <div>
      <img src={News1} />
      <p className="legend">
        21-06-2018: Se inagura AceMatch en el Club Palestino! 
        Llegan muchas personas y nuestros auspiciadores
      </p>
    </div>
    <div>
      <img src={News2} />
      <p className="legend">
        21-06-2018: Se inagura AceMatch en el Club Palestino! 
        Llegan muchas personas y nuestros auspiciadores
      </p>
    </div>
    <div>
      <img src={News3} />
      <p className="legend">
        21-06-2018: Se inagura AceMatch en el Club Palestino! 
        Llegan muchas personas y nuestros auspiciadores
      </p>
    </div>
  </Carousel>
);

export default SuperCarousel;
