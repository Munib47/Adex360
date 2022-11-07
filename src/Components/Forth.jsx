import React from 'react';
import './Forth.css';
import arrow from '../assets/img/Asset 36.png';
import anounce from '../assets/img/Asset 34.png';
import anouncea from '../assets/img/Asset 29.png';
import mobile from '../assets/img/Asset 32.png';
import hands from '../assets/img/Asset 33.png';
import hands2 from '../assets/img/Asset 30.png';
import anouncecrash from '../assets/img/Asset 31.png';
import cup from '../assets/img/Asset 28.png';
import logo2 from '../assets/img/adex-logo.webp';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";

const Forth = () => {
    AOS.init({
        duration: 1200,
    })

    return (
        <Container className="container4">
            <div className="div1 d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <h4 className="fw-bold text ps-5">Industry Practice</h4>
                    </div>
                    <div>
                        <img className="arrow" src={arrow} alt="" />
                    </div>
                </div>
                <div className="adex d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex justify-content-center">
                        <img className="adexLogo" src={logo2} alt="" />
                    </div>
                    <div>
                        <img className="arrow" src={arrow} alt="" />
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="div3 d-flex justify-content-around align-items-center">
                <div className="child1">
                    <div className="d-flex justify-content-center pb-5">
                        <img className="content" src={anounce} alt="" />
                    </div>
                    <div>
                        <h4>Content Creation</h4>
                    </div>
                </div>
                <div className="child2">
                    <div className="w-75 text-center">
                        <h4>1. It all start with story telling but...</h4>
                    </div>
                </div>
                <div className="child3">
                    <div className="d-flex justify-content-center pb-5">
                        <img className="content" src={anouncea} alt="" />
                    </div>
                    <div>
                        <h4 className="lastText">Content Journey</h4>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="div3 div33 d-flex justify-content-around align-items-center">
                <div className="child1">
                    <div className="d-flex justify-content-center pb-5">
                        <img className="audienceTest" src={mobile} alt="" />
                    </div>
                    <div>
                        <h4>Audience testing</h4>
                    </div>
                </div>
                <div className="child2">
                    <div className="w-75 text-center">
                        <h4>2. We don't waste your budget audience testing</h4>
                    </div>
                </div>
                <div className="child3">
                    <div className="d-flex justify-content-center pb-5">
                        <img className="result" src={hands} alt="" />
                    </div>
                    <div>
                        <h4 className="lastText">Results!</h4>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="div3 div34 d-flex justify-content-around align-items-center">
                <div className="child1">
                    <div className="d-flex justify-content-center pb-5">
                        <img className="anounce" src={anouncecrash} alt="" />
                    </div>
                    <div>
                        <h4>Content Creation</h4>
                    </div>
                </div>
                <div className="child2">
                    <div className="text-center child23 w-75">
                        <h4>3. We change the strategy quickly</h4>
                    </div>
                </div>
                <div className="child3">
                    <div className="d-flex justify-content-center pb-5">
                        <img className="anounce" src={anouncea} alt="" />
                    </div>
                    <div>
                        <h4 className="lastText">Optimization</h4>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="div3 d-flex justify-content-around align-items-center">
                <div className="child1">
                    <div className="d-flex justify-content-center pb-5">
                        <img className="result" src={hands2} alt="" />
                    </div>
                    <div>
                        <h4>Results</h4>
                    </div>
                </div>
                <div className="child2">
                    <div className="text-center child23 w-75">
                        <h4>4. And we make a difference</h4>
                    </div>
                </div>
                <div className="child3">
                    <div className="d-flex justify-content-center pb-5">
                        <img className="bigresult" src={cup} alt="" />
                    </div>
                    <div>
                        <h2 className="lastText">Biggerr Results!</h2>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Forth
