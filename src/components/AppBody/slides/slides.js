import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';
import Style from './slides.css'
 
class Slider extends React.Component {
    render() {
        return (
            <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500"src={require('../../../assests/images/slideshow/duster.jpg')} />
      <Carousel.Caption>
        <h3>Duster</h3>
        <p>SUV car model</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500"src={require('../../../assests/images/slideshow/kwid.jpg')} />
      <Carousel.Caption>
        <h3>KWID</h3>
        <p>Entry level model</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500"src={require('../../../assests/images/slideshow/lodgy.jpg')} />
      <Carousel.Caption>
        <h3>LODGY</h3>
        <p>Compact SUV.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500"src={require('../../../assests/images/slideshow/pulse.jpg')} />
      <Carousel.Caption>
        <h3>PULSE</h3>
        <p>For Youngster</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
        );
    }
}

export default Slider;