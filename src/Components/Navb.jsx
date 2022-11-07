import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/adex-logo.webp';
import './Navb.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Navb = () => {
  AOS.init({
    duration: 1200,
  })

  return (
    <>
      <Navbar className="d-flex justify-content-between align-items-center" data-aos="fade-up">
        <Container className="d-flex justify-content-between align-items-center" data-aos="fade-up">

          {/* Navbar left links */}
          <Nav className="navbar-nav">
            <Nav.Item className="logo nav-item">
              <div>
                <img className="w-25" src={logo} alt="logo" />
              </div>
            </Nav.Item>
          </Nav>

          {/* Navbar Right Links */}
          <Nav className="navbar-nav ml-auto">
            <Nav.Item className="nav-item">
              <div>
                <Button className="btn bg-white fw-bold border-dark rounded-0 text-dark">Let's talk</Button>
              </div>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Navb
