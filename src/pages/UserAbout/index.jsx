import { Row, Col } from "react-bootstrap";

import style from "./style.module.css";
import HeroImage from "../../assets/img/about-hero.png";
import SpaceImage from "../../assets/img/about-space.png";
import WhyImage from "../../assets/img/about-why.png";
import ContactImage from "../../assets/img/about-contact.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const UserAbout = () => {
  const spaceDetail = [
    [
      {
        title: "Office Space",
        value: "10",
      },
      {
        title: "Locations",
        value: "10",
      },
    ],
    [
      {
        title: "Rooms available",
        value: "100+",
      },
      {
        title: "Activity spaces",
        value: "120+",
      },
    ],
    [
      {
        title: "Internet speed",
        value: "700MBps",
      },
      {
        title: "Satisfied customers",
        value: "50+",
      },
    ],
  ];
  const contactDetail = [
    {
      icon: <HiOutlineLocationMarker size={24} />,
      title: "Address",
      value: "Jl. Jakarta no. 45",
    },
    {
      icon: <BsEnvelope size={24} />,
      title: "Email",
      value: "support@sewakantor.com",
    },
    {
      icon: <BsFillTelephoneFill size={24} />,
      title: "Contact",
      value: "+62 812-3456-7890",
    },
  ];

  return (
    <div
      className={`min-vh-100 h-auto w-100 mx-auto align-items-center justify-content-center`}
    >
      <div className={`${style.aboutContainer} h-auto`}>
        {/* Hero */}
        <div className={`${style.heroContainer}`}>
          <div className={`${style.heroShape}`}>
            <svg
              width="462"
              height="505"
              viewBox="0 0 462 505"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="227.5"
                cy="244.5"
                r="227"
                stroke="black"
                stroke-opacity="0.3"
              />
              <path d="M461 0L460 504.5" stroke="black" stroke-opacity="0.3" />
            </svg>
          </div>
          <h1 className={`${style.heroText} text-skMidnight`}>
            The Future of Office
          </h1>
          <img
            className={`${style.heroImage}`}
            src={HeroImage}
            alt="The future of office"
          />
        </div>

        {/* Space */}
        <div className={`${style.spaceContainer}`}>
          <img className={`${style.spaceImage}`} src={SpaceImage} alt="Space" />
          <div className={`${style.spaceGrid}`}>
            {spaceDetail.map((detail, index) => (
              <Row key={index}>
                {detail.map((item, index) => (
                  <Col key={index}>
                    <div className={`${style.spaceDetail}`}>
                      <h3 className={`${style.spaceDetailValue}`}>
                        {item.value}
                      </h3>
                      <h3 className={`${style.spaceDetailTitle}`}>
                        {item.title}
                      </h3>
                    </div>
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </div>

        {/* Why */}
        <div className={`${style.whyContainer}`}>
          <div className={`${style.whyShape}`}>
            <svg
              width="455"
              height="455"
              viewBox="0 0 455 455"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="227.5"
                cy="227.5"
                r="227"
                stroke="black"
                stroke-opacity="0.3"
              />
            </svg>
          </div>
          <div className={`d-flex flex-column ${style.whyText}`}>
            <h3 className={`${style.whyTitleMuted}`}>Why SewaKantor?</h3>
            <h2 className={`${style.whyTitle}`}>
              We care for our customers as a family
            </h2>
            <p className={`${style.whyParagraph}`}>
              For more than 30 years, we've helped businesses find and create
              the perfect workspace for their people. SewaKantor give your
              business the commercial office space solutions it needs without
              any headaches of upfront capital and lengthy leases. That's why
              more than 50% of Fortune 100 companies choose us.
            </p>
          </div>
          <img className={`${style.whyImage}`} src={WhyImage} alt="Why" />
        </div>

        {/* Contact */}
        <div className={`${style.contactContainer}`}>
          <div className={`${style.leftPart}`}>
            <div className={`${style.contactShape}`}>
              <svg
                width="543"
                height="533"
                viewBox="0 0 543 533"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="542"
                  height="532"
                  stroke="#9EA1AC"
                />
              </svg>
            </div>
            <img
              className={`${style.contactImage}`}
              src={ContactImage}
              alt="Contact"
            />
          </div>

          <div className={`${style.rightPart}`}>
            <form className={`${style.contactForm}`}>
              <h2 className={`${style.contactTitle} mb-5`}>Send us message</h2>

              <Row>
                <Col className={`d-flex flex-column`}>
                  <label className={`${style.contactLabel}`}>Name</label>
                  <input
                    className={`${style.contactInput}`}
                    type="text"
                    required={true}
                  />
                </Col>
                <Col className={`d-flex flex-column`}>
                  <label className={`${style.contactLabel}`}>Email</label>
                  <input
                    className={`${style.contactInput}`}
                    type="email"
                    required={true}
                  />
                </Col>
              </Row>
              <Row>
                <Col className={`d-flex flex-column`}>
                  <label className={`${style.contactLabel}`}>Message</label>
                  <textarea
                    className={`${style.contactTextarea}`}
                    required={true}
                  />
                </Col>
              </Row>
              <button className={`btn btn-dark ${style.contactButton}`}>
                Send message
              </button>
            </form>
            <hr />
            <div className={`d-flex justify-content-between`}>
              {contactDetail.map((detail, index) => (
                <div className={`d-flex gap-1 align-items-start`}>
                  <div className={`${style.contactDetailIcon}`}>
                    {detail.icon}
                  </div>
                  <div
                    className={`${style.contactDetailText} d-flex flex-column`}
                  >
                    <span className={`${style.contactDetailTextContent} fs-5`}>
                      {detail.title}
                    </span>
                    <p className={`${style.contactDetailTextContent}`}>
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAbout;
