import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import routes from "../../routes";
import AppStoreBadge from "../../assets/img/app-store-badge.png";

import GooglePlayBadge from "../../assets/img/google-play-badge.png";

import style from "./style.module.css";

const UserFooter = () => {
  return (
    <>
      <Container fluid className="bg-skMidnight text-skWhite">
        <Container fluid="lg">
          <Row className=" px-3 py-5 d-none d-lg-flex">
            <Col className="d-flex flex-column gap-5">
              <Row>
                <Col className="d-flex flex-column align-items-start">
                  <h3>About</h3>
                  <Link to={routes.about}>
                    <a className="link-light">Our story</a>
                  </Link>
                </Col>
                <Col className="d-flex flex-column align-items-start">
                  <h3>Spaces</h3>
                  <a href="#" className="link-light">
                    Add your spaces
                  </a>
                </Col>
                <Col className="d-flex flex-column align-items-start">
                  <h3>Member</h3>
                  <Link to={routes.login}>
                    <a className="link-light">Login</a>
                  </Link>
                  <Link to={routes.register}>
                    <a className="link-light">Register</a>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex flex-column align-items-start">
                  <h3>Review</h3>
                  <Link to={routes.reviews}>
                    <a className="link-light">View all review</a>
                  </Link>
                  <a href="#" className="link-light">
                    Most reviewed review
                  </a>
                </Col>
                <Col className="d-flex flex-column align-items-start">
                  <h3>Connect</h3>
                  <a
                    href="#"
                    className="d-flex gap-2 align-items-center link-light"
                  >
                    <BsFacebook size={16} /> Facebook
                  </a>
                  <a
                    href="#"
                    className="d-flex gap-2 align-items-center link-light"
                  >
                    <BsInstagram size={16} /> Instagram
                  </a>
                  <a
                    href={`#`}
                    className="d-flex gap-2 align-items-center link-light"
                  >
                    <BsTwitter size={16} /> Twitter
                  </a>
                  <a
                    href="#"
                    className="d-flex gap-2 align-items-center link-light"
                  >
                    <BsWhatsapp size={16} /> Whatsapp
                  </a>
                </Col>
                <Col></Col>
              </Row>
            </Col>
            <Col className="d-flex flex-column align-items-start">
              <h3>Download</h3>
              <p>Download our apps here:</p>
              <div className="d-flex gap-2">
                <a
                  href="#"
                  className={`d-flex gap-2 align-items-center link-light ${style.downloadContainer}`}
                >
                  <img
                    src={GooglePlayBadge}
                    alt="google-play-badge"
                    className="h-100"
                  />
                </a>
                <a
                  href="#"
                  className={`d-flex gap-2 align-items-center link-light ${style.downloadContainer}`}
                >
                  <img
                    src={AppStoreBadge}
                    alt="app-store-badge"
                    className="h-100"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="bg-skSmoke">
        <Row>
          <Col className="text-skBlack d-flex justify-content-center align-items-center">
            ©SewaKantor 2022
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserFooter;
