import React from "react";

/*Component*/
import UserNavbar from "../../components/UserNavbar";
import UserFooter from "../../components/UserFooter";
import { Container, Row, Col } from "react-bootstrap";

/**Image */
import profile_pict from "../../assets/img/profile_pict.png";

/**Style */
import style from "./style.module.css";

const UserProfile = () => {
  return (
    <div className="profile_section">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6" className={style.profile_outline}>
            <img
              src={profile_pict}
              alt="Foto Profil"
              className={style.profile_image}
            />
            <h4>Albert Flores</h4>

            <Col className={style.profile_button}>
              <button>My Review</button>
              <button>About Me</button>
              <button>Account Settings</button>
            </Col>
          </Col>

          <Col lg="9" md="8" sm="6" className={style.profile_main_content}>
            <h2>About Me</h2>
            <hr />
            <Col className={style.profile_content}>
              <form>
                <div className="d-flex justify-content-between">
                  <div className={style.form_input}>
                    <label>Name</label>
                    <input type="text"></input>
                  </div>
                  <div className={style.form_input}>
                    <label>Birthday</label>
                    <input type="date"></input>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className={style.form_input}>
                    <label>Company Name</label>
                    <input type="text"></input>
                  </div>
                  <div className={style.form_input}>
                    <label>Company Email</label>
                    <input type="text"></input>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div className={style.form_input}>
                    <label>Country</label>
                    <input type="text"></input>
                  </div>
                  <div className={style.form_input}>
                    <label>ZIP Code</label>
                    <input type="number"></input>
                  </div>
                </div>

                <div className={style.form_input_address}>
                  <label>Company Address</label>
                  <input type="text"></input>
                </div>

                <div className={style.profile_form_button}>
                  <button>Change</button>
                </div>
              </form>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
