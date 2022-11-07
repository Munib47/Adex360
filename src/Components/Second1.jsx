import { Container, Col } from "react-bootstrap";
import Sat from '../assets/img/Asset 37.png';
import Earth from '../assets/img/Asset 40.png';
import AOS from "aos";
import "aos/dist/aos.css";
const Second1 = () => {
  AOS.init({
    duration: 3000,
  });
  return (
    <>
      <Container>
      <div className="container1 d-flex justify-content-between align-items-center w-100 ps-5">
        <div className="text p-5">
          <h1 className="fw-bold ps-5">We expl<img src={Earth} />re markets, it helps us understand consumer behavior deeply, to <a className="link1">optimize campaigns better.</a></h1>
        </div>
        <div className="img">
          <img data-aos="slide-up" src={Sat} alt="Image" />
        </div>
      </div>
    </Container>
    </>
  );
};

export default Second1;
