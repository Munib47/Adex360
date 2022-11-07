import React from 'react';
import audience from '../assets/img/audience.jpg';
import circle from '../assets/img/Asset 25.png';
import Container from 'react-bootstrap/Container';
import "./Sixth.css";


const Sixth = () => {
  return (
    <Container className="sixth d-flex justify-content-center align-items-center">    
      <img className="img1 w-100 pb-5" src={audience} alt="" />
      <div className="div">
        <img src={circle} alt="" />
      </div>
      <div className="div1 d-flex justify-content-between align-items-center">
        <div className="w-50 fw-bold">
            <h1 className="w-75">Grand audience Size</h1>
        </div>
        <div className="w-50">
            <h4 className="ps-5 w-50 ">with optimized conversion cost</h4>
        </div>
      </div>
    </Container>
  )
}

export default Sixth
