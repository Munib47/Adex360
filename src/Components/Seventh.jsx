import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "./Seventh.css";
import performance from '../assets/img/Asset 22.png';
import performance1 from '../assets/img/Asset 23.png';
import boldarrow from '../assets/img/Asset 24.png';
import smarrow from '../assets/img/Asset 20.png';

const Seventh = () => {
  return (
    <Container>   
      <div className="d-flex w-100 seventh">
        {/* <div className="d-flex"> */}
        <div className="seventh1 d-flex flex-column justify-content-center">
          <img className="img1" src={performance1} alt="" />
          <div className="text7">
            <h2 className="fw-bold">Performance Marketing</h2>
            <h2 className="head2 fw-bold">Brand Story to your crowd</h2>
          </div>
          <Button className="text-uppercase btn bg-white border-0 w-100">Let's talk <img className="smarrow" src={smarrow} alt="" /> </Button>
        </div>
        <div>
          <img className="performance" src={performance} alt="" />
        </div>
        {/* <div>
          <img className="arrow" src={boldarrow} alt="" />
        </div> */}
        {/* </div> */}
      </div>
    </Container>
  )
}

export default Seventh
