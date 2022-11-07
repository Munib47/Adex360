import React from 'react';
import Container from 'react-bootstrap/Container';
import './Third.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Third = () => {
  AOS.init({
    duration: 1500,
  })

  return (
    <Container className="container3 p-5">    
      <div className="ps-5">
        <div className="ps-3">
          <h1 data-aos="fade-up" className="fw-bold mt-5">Consumer Empathy makes the difference between digital marketing agencies and us.</h1>
        </div>
      </div>
    </Container>
  )
}

export default Third
