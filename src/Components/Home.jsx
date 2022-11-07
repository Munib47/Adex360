import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init({
    duration: 1500,
  })

  return (
    <Container className="head d-flex judtify-content-center align-items-center p-5">
      <div className="p-5">
        <div className="div">
          <h1 data-aos="fade-right" className="fw-bold mb-5">We help great brands grow their <a className="link fw-bold">Leads</a></h1>
        </div>
      </div>
    </Container>
  )
}

export default Home
