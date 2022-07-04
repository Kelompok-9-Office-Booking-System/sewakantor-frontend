import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import AppStoreBadge from "../../assets/img/app-store-badge.png";

import GooglePlayBadge from "../../assets/img/google-play-badge.png";
import routes from "../../routes";

import style from "./style.module.css";

const UserFooter = () => {
  const socials = [
    {
      href: "https://www.facebook.com/",
      icon: <BsFacebook size={16} />,
      name: "Facebook",
    },
    {
      href: "https://www.instagram.com/",
      icon: <BsInstagram size={16} />,
      name: "Instagram",
    },
    {
      href: "https://www.whatsapp.com/",
      icon: <BsWhatsapp size={16} />,
      name: "Whatsapp",
    },
  ];
  return (
    <>
      <Container fluid className="bg-skMidnight text-skWhite">
        <Container fluid="lg">
          <Row className=" px-3 py-5 d-none d-lg-flex">
            <Col className="d-flex flex-column gap-5">
              <Row>
                <Col className="d-flex flex-column align-items-start">
                  <h3>About</h3>
                  <Link to={routes.about} className={"link-light"}>
                    Our Story
                  </Link>
                </Col>
                <Col className="d-flex flex-column align-items-start">
                  <h3>Spaces</h3>
                  <Link to={`#`} className={"link-light"}>
                    Add your spaces
                  </Link>
                </Col>
                <Col className="d-flex flex-column align-items-start">
                  <h3>Member</h3>
                  <Link to={routes.login} className={"link-light"}>
                    Login
                  </Link>
                  <Link to={routes.register} className={"link-light"}>
                    Register
                  </Link>
                </Col>
              </Row>

              <Row>
                <Col className="d-flex flex-column align-items-start">
                  <h3>Review</h3>
                  <Link to={routes.reviews} className={"link-light"}>
                    View all review
                  </Link>
                  <Link to={`#`} className={"link-light"}>
                    Most reviewed review
                  </Link>
                </Col>
                <Col className="d-flex flex-column align-items-start">
                  <h3>Connect</h3>
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target={`_blank`}
                      rel={"noopener noreferrer"}
                      className={`d-flex gap-2 align-items-center link-light`}
                    >
                      {social.icon} {social.name}
                    </a>
                  ))}
                </Col>
                <Col />
              </Row>
            </Col>

            <Col className="d-flex flex-column align-items-start">
              <h3>Download</h3>
              <p>Download our apps here:</p>
              <div className="d-flex gap-2">
                <a
                  href="https://play.google.com"
                  target={`_blank`}
                  rel="noopener noreferrer"
                  className={`d-flex gap-2 align-items-center link-light ${style.downloadContainer}`}
                >
                  <img
                    src={GooglePlayBadge}
                    alt="google-play-badge"
                    className="h-100"
                  />
                </a>
                <a
                  href="https://apps.apple.com"
                  target={`_blank`}
                  className={`d-flex gap-2 align-items-center link-light ${style.downloadContainer}`}
                  rel="noopener noreferrer"
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
