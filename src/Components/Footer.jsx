import React from 'react';
import logo from '../assets/img/Asset 27.png';
import linkedin from '../assets/img/linkedin.png';
import twitter from '../assets/img/twitter.png';
import youtube from '../assets/img/Youtube.png';
import insta from '../assets/img/insta.png';
import facebook from '../assets/img/facebook.png';
import "./Footer.css";
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <Container>     
            <footer className='main-footer d-flex justify-content-between align-items-center'>
                {/* left side */}
                <div className="left">
                    <img className="logo1" src={logo} alt="" />
                    <div className="p-0 m-0 pt-5">
                        <a href='#'><img className="linkedin" src={linkedin} alt="" /></a>
                        <a href='#'><img className="twitter" src={twitter} alt="" /></a>
                        <a href='#'><img className="youtube" src={youtube} alt="" /></a>
                        <a href='#'><img className="insta" src={insta} alt="" /></a>
                        <a href='#'><img className="facebook" src={facebook} alt="" /></a>
                    </div>
                    <div className="pt-3">
                        <p className="text-muted">&copy; 2021 Adex360</p>
                    </div>
                </div>
                {/* right side */}
                <div className="right">
                    <h6 className="fw-bold">Contact:</h6>
                    <a href='#' className="text-decoration-none text-dark">info@adex360.com</a>
                    <p className="m-0 mt-3 mb-2">+92 (301) 822-0878</p>
                    <p className="p-0 m-0">2nd Floor, Daftarkhwan, Vogue Towers</p>
                    <p className="p-0 m-0">MM Alam Rd, Block C2 Gulberg III,</p>
                    <p className="p-0 m-0">Lahore, Punjab, Pakistan - 54000</p>
                </div>
            </footer>
        </Container>
    )
}

export default Footer
