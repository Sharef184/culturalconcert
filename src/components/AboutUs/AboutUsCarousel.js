import React from 'react';
import { Container, Carousel  } from 'react-bootstrap'
import Img1 from './images/1.png'
import Img2 from './images/2.png'
import Img3 from './images/3.png'
import Img4 from './images/4.png'
import Img5 from './images/5.png'
import Img6 from './images/6.png'

const AboutUsCarousel = () => {
  return (
    <div className="section-a">
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-imgs" src={Img1} alt="1"/>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-imgs" src={Img2} alt="2"/>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-imgs" src={Img3} alt="3"/>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-imgs" src={Img4} alt="4"/>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-imgs" src={Img5} alt="5"/>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-imgs" src={Img6} alt="6"/>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default AboutUsCarousel;
