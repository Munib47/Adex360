import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import smarrow from '../assets/img/Asset 20.png';
import search from '../assets/img/Asset 19.png';
import search1 from '../assets/img/Asset 21.png';
import "./Eight.css";

const Eight = () => {
    return (
        <Container className="d-flex eight">        
            <div>
                <img className="search" src={search1} alt="" />
            </div>
            <div className="eight1 d-flex flex-column justify-content-center">
                <img className="img1" src={search} alt="" />
                <div className="">
                    <h2 className="fw-bold">Search Engine Optimization</h2>
                    <h2 className="head2 fw-bold">Grow OrganicallyTT</h2>
                </div>
                <Button className="text-uppercase btn bg-transparent w-100 border-0">Let's talk <img className="smarrow" src={smarrow} alt="" /> </Button>
            </div>
        </Container>
    )
}

export default Eight
