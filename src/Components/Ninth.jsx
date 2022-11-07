import React from 'react';
import play from '../assets/img/Asset 17.png';
import smarrow from '../assets/img/Asset 20.png';
import "./Ninth.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Ninth = () => {
  return (
    <Container>
      <div className="ninth w-100">
        {/* <img className="img p-0 w-100" src={play} alt="" /> */}
        <div className="w-100 div d-flex justify-content-between align-items-center">
          <h1 className="text fw-bold w-50">Schedule a Cosultancy Session with Us</h1>
          <div className="div2">
            <h6>TAKE A LEAP!</h6>
            <Button className="text-uppercase btn border-0 rounded-0 w-100 fw-bold">Let's talk<img className="smarrow" src={smarrow} alt="" /></Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Ninth
