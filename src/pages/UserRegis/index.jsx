import React from "react";

//style
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/img/logo/LogoIcon.svg";

//Hook
import useForm from "../../hooks/useForm";
import style from "./style.module.css";

//Validate
import validate from "./validateInfo";

const UserRegis = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <div className={`${style.registerContainer} bg-skSmoke`}>
      <Container>
        <Row>
          <Col>
            <div>
              <img src={logo} alt={`sewaKantor`} className={style.logo_image} />
            </div>
          </Col>
          <Col className={style.right_login}>
            <div>
              <Form>
                <Col className={style.login_form}>
                  <h4>Start For Free</h4>
                  <h1>Create New Account</h1>
                  <h6>
                    Already have any account? <span>Login</span>
                  </h6>
                  <Row style={{ marginBottom: "20px" }}>
                    <Col className={style.form_section}>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        First Name
                      </Form.Label>
                      <Form.Control
                        id="firstname"
                        placeholder="Enter your first name"
                        type="text"
                        name="firstname"
                        className={style.input}
                        value={values.firstname}
                        onChange={handleChange}
                      />
                      {errors.firstname && <p>{errors.firstname}</p>}
                    </Col>
                    <Col className={style.form_section}>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Last Name
                      </Form.Label>
                      <Form.Control
                        id="lastname"
                        name="lastname"
                        type="text"
                        placeholder="Enter your last name"
                        value={values.lastname}
                        onChange={handleChange}
                      />
                      {errors.firstname && <p>{errors.lastname}</p>}
                    </Col>
                  </Row>
                  <Col
                    style={{ marginBottom: "20px" }}
                    className={style.form_section}
                  >
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Email
                    </Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </Col>

                  <Col className={style.form_section}>
                    <Row style={{ marginBottom: "20px" }}>
                      <Col>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Password
                        </Form.Label>
                        <Form.Control
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                          value={values.password}
                          onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                      </Col>
                      <Col className={style.form_section}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Confirm Password
                        </Form.Label>
                        <Form.Control
                          id="password2"
                          name="password2"
                          type="password"
                          placeholder="Retype your password"
                          value={values.password2}
                          onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                      </Col>
                    </Row>
                  </Col>
                  <Row>
                    <Col>
                      <Button className={style.google_signup}>
                        <FcGoogle className={style.google_btn} />
                        Sign Up With Google
                      </Button>
                    </Col>
                    <Col>
                      <Button className={style.signup} onClick={handleSubmit}>
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserRegis;
