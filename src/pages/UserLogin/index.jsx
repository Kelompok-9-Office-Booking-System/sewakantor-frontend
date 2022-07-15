import React, { useState } from "react";
import { Link } from "react-router-dom";

//Hook
import useForm from "../../hooks/useForm";
import routes from "../../routes";

//Validate
import validate from "./validateInfo";

//style
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import style from "./style.module.css";
import logo from "../../assets/img/logo/LogoIcon.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const UserRegis = () => {
  const {
    handleChange,
    values,
    handleLogin,
    showpassword,
    errors,
    handleToggle,
  } = useForm(validate);

  return (
    <div className={`${style.registerContainer} bg-skSmoke`}>
      <Container>
        <Row>
          <Col>
            <div>
              <img src={logo} className={style.logo_image} alt="Logo" />
            </div>
          </Col>
          <Col className={style.right_login}>
            <div>
              <Form>
                <Col className={style.login_form}>
                  <h1>Login</h1>
                  <h6>
                    Don't have any account?{" "}
                    <Link to={routes.register}>Register</Link>
                  </h6>
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
                        <Col className={style.input_password_wrapper}>
                          <Form.Control
                            id="password"
                            name="password"
                            type={showpassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            className={style.password_field}
                          />
                          <button
                            className={style.password_btn}
                            onClick={handleToggle}
                          >
                            {showpassword ? (
                              <AiOutlineEyeInvisible />
                            ) : (
                              <AiOutlineEye />
                            )}
                          </button>
                        </Col>
                        {errors.password && <p>{errors.password}</p>}
                      </Col>
                    </Row>
                  </Col>
                  <Row>
                    <Col>
                      <Button className={style.signup} onClick={handleLogin}>
                        Login
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
