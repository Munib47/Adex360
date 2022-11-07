import React from 'react';
import Container from 'react-bootstrap/Container';
import Sat from '../assets/img/Asset 37.png';
import Earth from '../assets/img/Asset 40.png';
import './Second.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Second = () => {
  AOS.init({
    duration: 1500,
  })

  return (
    <Container>
      <div className="container1 d-flex justify-content-between align-items-center w-100 ps-5" data-aos="slide-up">
        <div className="text p-5">
          <h1 className="fw-bold">We expl<img className="earth" src={Earth} />re markets, it helps us understand consumer behavior deeply, to <a className="link1">optimize campaigns better.</a></h1>
        </div>
        {/* <div className="img">
          <img data-aos="slide-up" src={Sat} alt="Image" />
        </div> */}
      </div>
    </Container>
  )
}

export default Second
