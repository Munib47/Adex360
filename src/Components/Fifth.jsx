import React from 'react';
import './Fifth.css';
import Container from 'react-bootstrap/Container';
import dollar from '../assets/img/Asset 26.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Fifth = () => {
  AOS.init({
    duration: 1500,
  })

  return (
    <Container data-aos="fade-up" className="text-center text5">
      <h1>High impact campaigns,</h1>
      <h1>no penny wa<img className="dollar" src={dollar} alt="" />ted doing testing.</h1>
    </Container>
  )
}

export default Fifth
