import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../../routes";
import AffBCA from "../../assets/img/landing-aff-bca.png";
import ExploreCoworking from "../../assets/img/landing-coworking.png";

import HeroImage from "../../assets/img/landing-hero.png";
import ExploreMeeting from "../../assets/img/landing-meeting.png";
import ExploreOffice from "../../assets/img/landing-office.png";
import TrustIllust from "../../assets/img/landing-trust.png";
import ExploreVirtual from "../../assets/img/landing-virtualoffice.png";

import styles from "./style.module.css";

const IconDiscussion = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45 20.8917C46.9383 21.4717 48.3333 21.6667 48.3333 21.6667V16.6667H51.6667C53.8768 16.6667 55.9964 15.7887 57.5592 14.2259C59.122 12.6631 60 10.5435 60 8.33333C60 6.1232 59.122 4.00358 57.5592 2.44078C55.9964 0.877974 53.8768 0 51.6667 0H42.06C39.7455 0 37.5259 0.919414 35.8893 2.55598C34.2527 4.19255 33.3333 6.41221 33.3333 8.72667C33.3333 16.2567 40.58 19.57 45 20.8917ZM56.6667 8.33333C56.6667 9.65942 56.1399 10.9312 55.2022 11.8689C54.2645 12.8065 52.9927 13.3333 51.6667 13.3333H45V17.3917C44.0856 17.0812 43.1931 16.7098 42.3283 16.28C39.0233 14.6233 36.6667 12.2667 36.6667 8.72667C36.6667 7.29627 37.2349 5.92445 38.2463 4.913C39.2578 3.90156 40.6296 3.33333 42.06 3.33333H51.6667C52.9927 3.33333 54.2645 3.86012 55.2022 4.7978C56.1399 5.73548 56.6667 7.00725 56.6667 8.33333ZM14.695 19.9883C12.5109 19.9127 10.4439 18.9818 8.93985 17.3962C7.43578 15.8107 6.61505 13.6976 6.65463 11.5125C6.69421 9.32738 7.59092 7.24537 9.15143 5.71533C10.7119 4.1853 12.8112 3.32982 14.9967 3.33333H20.2783C22.4147 3.33333 24.4635 4.18198 25.9741 5.69259C27.4847 7.20319 28.3333 9.25201 28.3333 11.3883C28.3333 18.125 22.2833 21.205 18.3333 22.5C16.42 23.1267 15 23.3333 15 23.3333V20L14.695 19.9883V19.9883ZM18.3333 16.785L14.8167 16.6583C13.4951 16.6296 12.2388 16.0784 11.3228 15.1254C10.4068 14.1724 9.90577 12.8953 9.92936 11.5737C9.95295 10.2521 10.4993 8.99362 11.4487 8.07392C12.3981 7.15423 13.6733 6.64821 14.995 6.66667H20.2767C20.8969 6.66645 21.511 6.78842 22.0841 7.0256C22.6571 7.26279 23.1778 7.61055 23.6165 8.04902C24.0551 8.48749 24.403 9.00808 24.6404 9.58104C24.8778 10.154 25 10.7681 25 11.3883C25 14.58 22.9717 16.6717 20.1267 18.155C19.5267 18.4683 18.9183 18.735 18.3333 18.9617V16.785ZM36.6667 30C36.6667 33.6833 33.6833 36.6667 30 36.6667C26.3167 36.6667 23.3333 33.6833 23.3333 30C23.3333 26.3167 26.3167 23.3333 30 23.3333C33.6833 23.3333 36.6667 26.3167 36.6667 30ZM33.3333 30C33.3333 30.8841 32.9821 31.7319 32.357 32.357C31.7319 32.9821 30.8841 33.3333 30 33.3333C29.1159 33.3333 28.2681 32.9821 27.643 32.357C27.0179 31.7319 26.6667 30.8841 26.6667 30C26.6667 29.1159 27.0179 28.2681 27.643 27.643C28.2681 27.0179 29.1159 26.6667 30 26.6667C30.8841 26.6667 31.7319 27.0179 32.357 27.643C32.9821 28.2681 33.3333 29.1159 33.3333 30V30ZM21.6667 33.3333C21.6667 37.0167 18.6833 40 15 40C11.3167 40 8.33333 37.0167 8.33333 33.3333C8.33333 29.65 11.3167 26.6667 15 26.6667C18.6833 26.6667 21.6667 29.65 21.6667 33.3333ZM18.3333 33.3333C18.3333 34.2174 17.9821 35.0652 17.357 35.6904C16.7319 36.3155 15.8841 36.6667 15 36.6667C14.1159 36.6667 13.2681 36.3155 12.643 35.6904C12.0179 35.0652 11.6667 34.2174 11.6667 33.3333C11.6667 32.4493 12.0179 31.6014 12.643 30.9763C13.2681 30.3512 14.1159 30 15 30C15.8841 30 16.7319 30.3512 17.357 30.9763C17.9821 31.6014 18.3333 32.4493 18.3333 33.3333V33.3333ZM0 50.9083C0 45.8717 9.99333 43.3333 15 43.3333C15.975 43.3333 17.14 43.43 18.3833 43.6217C20.6167 41.9833 24.7117 40 30 40C35.2867 40 39.3817 41.9833 41.6183 43.6217C42.7368 43.4413 43.8672 43.3449 45 43.3333C50.0067 43.3333 60 45.8717 60 50.9083V60H0V50.9083ZM26.0867 50.0383C26.6667 50.5783 26.6667 50.86 26.6667 50.9083V56.6667H3.33333V50.9083C3.33333 50.8583 3.33333 50.5783 3.91333 50.0383C4.51833 49.4733 5.51667 48.8717 6.87333 48.3217C9.59333 47.2217 12.9167 46.6667 15 46.6667C17.0833 46.6667 20.4067 47.2217 23.1267 48.3217C24.4833 48.8717 25.4817 49.4733 26.0867 50.0383ZM36.9033 44.76C34.7247 43.8153 32.3747 43.3296 30 43.3333C27.24 43.3333 24.8933 43.9767 23.0983 44.76C26.79 46 30 48.0533 30 50.91C30 48.0533 33.21 46.0017 36.9033 44.76V44.76ZM56.6667 50.91C56.6667 50.86 56.6667 50.5783 56.0867 50.0383C55.4817 49.4733 54.4833 48.8717 53.1267 48.3217C50.4067 47.2217 47.0833 46.6667 45 46.6667C42.9167 46.6667 39.5933 47.2217 36.8733 48.3217C35.5167 48.8717 34.5183 49.4733 33.9133 50.0383C33.3333 50.5783 33.3333 50.86 33.3333 50.9083V56.6667H56.6667V50.9083V50.91ZM45 40C48.6833 40 51.6667 37.0167 51.6667 33.3333C51.6667 29.65 48.6833 26.6667 45 26.6667C41.3167 26.6667 38.3333 29.65 38.3333 33.3333C38.3333 37.0167 41.3167 40 45 40ZM45 36.6667C45.8841 36.6667 46.7319 36.3155 47.357 35.6904C47.9821 35.0652 48.3333 34.2174 48.3333 33.3333C48.3333 32.4493 47.9821 31.6014 47.357 30.9763C46.7319 30.3512 45.8841 30 45 30C44.1159 30 43.2681 30.3512 42.643 30.9763C42.0179 31.6014 41.6667 32.4493 41.6667 33.3333C41.6667 34.2174 42.0179 35.0652 42.643 35.6904C43.2681 36.3155 44.1159 36.6667 45 36.6667Z"
      />
    </svg>
  );
};
const IconPeople = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 70 55"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.1429 0.285767C20.4545 0.285767 18.7826 0.618327 17.2227 1.26446C15.6628 1.91059 14.2454 2.85764 13.0516 4.05154C11.8577 5.24543 10.9106 6.66279 10.2645 8.22269C9.61834 9.78259 9.28578 11.4545 9.28578 13.1429C9.28578 14.8313 9.61834 16.5032 10.2645 18.0631C10.9106 19.623 11.8577 21.0404 13.0516 22.2343C14.2454 23.4282 15.6628 24.3752 17.2227 25.0214C18.7826 25.6675 20.4545 26.0001 22.1429 26.0001C25.5528 26.0001 28.8231 24.6455 31.2343 22.2343C33.6455 19.8231 35.0001 16.5528 35.0001 13.1429C35.0001 9.73298 33.6455 6.46272 31.2343 4.05154C28.8231 1.64035 25.5528 0.285767 22.1429 0.285767V0.285767ZM13.5715 13.1429C13.5715 12.0173 13.7932 10.9027 14.224 9.86277C14.6547 8.82283 15.2861 7.87792 16.082 7.08199C16.8779 6.28606 17.8228 5.6547 18.8628 5.22394C19.9027 4.79319 21.0173 4.57148 22.1429 4.57148C23.2685 4.57148 24.3831 4.79319 25.4231 5.22394C26.463 5.6547 27.4079 6.28606 28.2038 7.08199C28.9998 7.87792 29.6311 8.82283 30.0619 9.86277C30.4926 10.9027 30.7144 12.0173 30.7144 13.1429C30.7144 15.4162 29.8113 17.5964 28.2038 19.2038C26.5964 20.8113 24.4162 21.7143 22.1429 21.7143C19.8696 21.7143 17.6895 20.8113 16.082 19.2038C14.4746 17.5964 13.5715 15.4162 13.5715 13.1429V13.1429ZM52.1429 6.00005C49.4908 6.00005 46.9472 7.05362 45.0719 8.92898C43.1965 10.8043 42.1429 13.3479 42.1429 16.0001C42.1429 18.6522 43.1965 21.1958 45.0719 23.0711C46.9472 24.9465 49.4908 26.0001 52.1429 26.0001C54.7951 26.0001 57.3386 24.9465 59.214 23.0711C61.0894 21.1958 62.1429 18.6522 62.1429 16.0001C62.1429 13.3479 61.0894 10.8043 59.214 8.92898C57.3386 7.05362 54.7951 6.00005 52.1429 6.00005V6.00005ZM46.4286 16.0001C46.4286 14.4845 47.0307 13.0311 48.1023 11.9594C49.1739 10.8878 50.6274 10.2858 52.1429 10.2858C53.6584 10.2858 55.1119 10.8878 56.1835 11.9594C57.2552 13.0311 57.8572 14.4845 57.8572 16.0001C57.8572 17.5156 57.2552 18.969 56.1835 20.0407C55.1119 21.1123 53.6584 21.7143 52.1429 21.7143C50.6274 21.7143 49.1739 21.1123 48.1023 20.0407C47.0307 18.969 46.4286 17.5156 46.4286 16.0001ZM0.714355 38.1429C0.714355 36.4379 1.39165 34.8028 2.59724 33.5972C3.80283 32.3916 5.43796 31.7143 7.14293 31.7143H37.1429C38.8479 31.7143 40.483 32.3916 41.6886 33.5972C42.8942 34.8028 43.5715 36.4379 43.5715 38.1429V39.6601C43.5678 39.8912 43.5516 40.1221 43.5229 40.3515C43.4585 40.9409 43.3535 41.5251 43.2086 42.1001C42.7362 43.9762 41.8941 45.7393 40.7315 47.2858C37.8344 51.1515 32.3086 54.5715 22.1429 54.5715C11.9772 54.5715 6.4515 51.1515 3.55435 47.2858C2.3928 45.739 1.55161 43.976 1.08007 42.1001C0.893521 41.3531 0.773999 40.5911 0.722927 39.8229C0.719366 39.7687 0.716509 39.7144 0.714355 39.6601V38.1429ZM5.00007 39.5572V39.6086L5.02578 39.8943C5.05436 40.1629 5.1115 40.5658 5.23721 41.06C5.57033 42.3816 6.16275 43.6237 6.98007 44.7143C8.90578 47.2772 13.0229 50.2858 22.1429 50.2858C31.2629 50.2858 35.3801 47.2772 37.3029 44.7143C38.3029 43.3829 38.8001 42.0515 39.0458 41.06C39.1658 40.5838 39.2451 40.0983 39.2829 39.6086L39.2858 39.5572V38.1429C39.2858 37.5746 39.06 37.0295 38.6581 36.6277C38.2563 36.2258 37.7112 36.0001 37.1429 36.0001H7.14293C6.57461 36.0001 6.02956 36.2258 5.6277 36.6277C5.22583 37.0295 5.00007 37.5746 5.00007 38.1429V39.5572V39.5572ZM43.8572 47.7715C46.0658 48.4486 48.7915 48.8572 52.1372 48.8572C60.0515 48.8572 64.4743 46.5829 66.8772 43.84C67.838 42.7547 68.5499 41.4724 68.9629 40.0829C69.1261 39.5219 69.2304 38.9455 69.2743 38.3629L69.2801 38.2286V38.1429C69.2801 36.4379 68.6028 34.8028 67.3972 33.5972C66.1916 32.3916 64.5564 31.7143 62.8515 31.7143H43.8401C44.9658 32.8886 45.7886 34.3601 46.1772 36.0001H62.8543C63.4178 36 63.9585 36.2218 64.3596 36.6175C64.7606 37.0133 64.9897 37.551 64.9972 38.1143C64.9719 38.3737 64.9221 38.6301 64.8486 38.88C64.6096 39.6716 64.2 40.4011 63.6486 41.0172C62.3029 42.5601 59.2286 44.5715 52.1372 44.5715C49.4486 44.5715 47.3372 44.2829 45.6772 43.8372C45.2369 45.2193 44.6254 46.541 43.8572 47.7715V47.7715Z" />
    </svg>
  );
};
const IconMobile = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 65"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30 57.95L23.525 51.475L20 55L30 65L50 45L46.475 41.475L30 57.95Z" />
      <path d="M5 60V15H35V37.5H40V5C39.9987 3.67432 39.4715 2.40332 38.5341 1.46593C37.5967 0.528533 36.3257 0.00132369 35 0H5C3.67432 0.00132369 2.40332 0.528533 1.46593 1.46593C0.528533 2.40332 0.00132369 3.67432 0 5V60C0.00132369 61.3257 0.528533 62.5967 1.46593 63.5341C2.40332 64.4715 3.67432 64.9987 5 65H15V60H5ZM5 5H35V10H5V5Z" />
    </svg>
  );
};

const UserLanding = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const listCity = [
    { name: "Jakarta", value: "jakarta" },
    { name: "Tangerang", value: "tangerang" },
    { name: "Bandung", value: "bandung" },
    { name: "Bekasi", value: "bekasi" },
  ];
  const listType = [
    { name: "Office spaces", value: "office" },
    { name: "Meeting rooms", value: "meeting" },
    { name: "Coworking", value: "coworking" },
    { name: "Virtual office", value: "virtual" },
  ];

  return (
    <div
      className={`d-flex flex-column bg-skSmoke min-vh-100 align-items-center justify-content-center`}
    >
      <div className={`${styles.landingContainer}`}>
        {/* Hero */}
        <div
          className={`d-flex flex-column justify-content-center align-items-center ${styles.heroContainer}`}
        >
          <h1 className={`${styles.heroText}`}>
            Let’s Find your Place For Work
          </h1>
          {/* Image */}
          <div className={`${styles.heroImageContainer}`}>
            <img
              src={HeroImage}
              alt="landing-hero"
              className={`${styles.heroImage}`}
            />
            <img
              src={HeroImage}
              alt="landing-hero"
              className={`${styles.heroImageShadow}`}
            />
          </div>
        </div>

        {/* Explore */}
        <div
          className={`d-flex flex-column align-items-center justify-content-center ${styles.exploreContainer}`}
        >
          <h2>Explore Product</h2>
          <Row
            className={`${styles.exploreTypes} d-flex justify-content-between gap-3`}
          >
            <Col className={`${styles.exploreItem}`}>
              <img src={ExploreOffice} alt="Office Spaces" />
              <div className={`${styles.exploreItemText}`}>Office Spaces</div>
            </Col>
            <Col className={`${styles.exploreItem}`}>
              <img src={ExploreMeeting} alt="Meeting Rooms" />
              <div className={`${styles.exploreItemText}`}>Meeting Rooms</div>
            </Col>
            <Col className={`${styles.exploreItem}`}>
              <img src={ExploreCoworking} alt="Coworking" />
              <div className={`${styles.exploreItemText}`}>Coworking</div>
            </Col>
            <Col className={`${styles.exploreItem}`}>
              <img src={ExploreVirtual} alt="Virtual Office" />
              <div className={`${styles.exploreItemText}`}>Virtual Office</div>
            </Col>
          </Row>
        </div>

        {/* Find */}
        <div
          className={`d-flex flex-column align-items-center justify-content-center`}
        >
          <h2>Find your space</h2>
          <div
            className={`d-flex gap-3 w-100 flex-grow-1 align-items-center justify-content-center w-100 my-3`}
          >
            <select
              onChange={(e) => {
                setSelectedCity(e.target.value);
              }}
            >
              <option value="" hidden>
                Select a city
              </option>
              {listCity.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.name}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => {
                setSelectedType(e.target.value);
              }}
            >
              <option value="" hidden>
                Type of space
              </option>
              {listType.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.name}
                </option>
              ))}
            </select>
            <Link
              to={
                selectedCity === "" || selectedType === ""
                  ? "#"
                  : `${routes.search}?city=${selectedCity}&type=${selectedType}`
              }
              className={`${styles.findButtonContainer}`}
              onClick={(e) => {
                if (selectedCity === "" || selectedType === "") {
                  e.preventDefault();
                }
              }}
            >
              <button disabled={selectedCity === "" || selectedType === ""}>
                Search
              </button>
            </Link>
          </div>
        </div>

        {/* Affiliates */}
        <div
          className={`d-flex flex-column align-items-center justify-content-center`}
        >
          <h2>Who’s Talking About Us</h2>
          <div className={`d-flex flex-column gap-5`}>
            <Row className={`gap-3 d-flex justify-content-center mx-auto`}>
              <Col className={`p-0 d-flex justify-content-center`}>
                <img src={AffBCA} alt={`Bank BCA`} className={`w-75`} />
              </Col>
              <Col className={`p-0 d-flex justify-content-center`}>
                <img src={AffBCA} alt={`Bank BCA`} className={`w-75`} />
              </Col>
              <Col className={`p-0 d-flex justify-content-center`}>
                <img src={AffBCA} alt={`Bank BCA`} className={`w-75`} />
              </Col>
            </Row>
            <Row className={`gap-3 d-flex justify-content-center mx-auto`}>
              <Col className={`p-0 d-flex justify-content-center`}>
                <img src={AffBCA} alt={`Bank BCA`} className={`w-75`} />
              </Col>
              <Col className={`p-0 d-flex justify-content-center`}>
                <img src={AffBCA} alt={`Bank BCA`} className={`w-75`} />
              </Col>
              <Col className={`p-0 d-flex justify-content-center`}>
                <img src={AffBCA} alt={`Bank BCA`} className={`w-75`} />
              </Col>
            </Row>
          </div>
        </div>

        {/* Trust */}
        <div
          className={`d-flex flex-column align-items-center justify-content-center mb-5`}
        >
          <h2>Why you should trust us</h2>
          <div className={`d-flex ${styles.trustContainer}`}>
            <img
              src={TrustIllust}
              alt={`Trust Illustration`}
              className={`${styles.trustImage}`}
            />
            <div
              className={`${styles.trustTextContainer} d-flex flex-column justify-content-between`}
            >
              <div className={`d-flex gap-5`}>
                <IconDiscussion size={60} />
                <div className={`d-flex flex-column ${styles.trustText}`}>
                  <h3>Exclusive Benefits</h3>
                  <p>
                    Earn complimentary meeting room credits and exclusive
                    discounts and offers that can be redeemed across any
                    SewaKantor
                  </p>
                </div>
              </div>
              <div className={`d-flex gap-5`}>
                <IconPeople size={60} />
                <div className={`d-flex flex-column ${styles.trustText}`}>
                  <h3>Facility Management</h3>
                  <p>
                    We offer fully integrated, tech-enabled facility and
                    property management services for hassle-free maintenance &
                    operation of your office space
                  </p>
                </div>
              </div>
              <div className={`d-flex gap-5`}>
                <IconMobile size={60} />
                <div className={`d-flex flex-column ${styles.trustText}`}>
                  <h3>Web & Mobile App</h3>
                  <p>Our web and mobile app facilitate bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserLanding;
